import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderWhiteTitle } from '../../headers/HeaderWhiteTitle.';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { CreatPostAction } from '../../store/action/action';
import { AppColors } from '../../styles/AppColors';
import { Styles } from '../../styles/Styles';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';
import { Button } from '../../ui/Button';
import { t } from '../../components/lang';

export const AddImg = ({ navigation }) => {
  const mainData = useSelector(st => st.mainData);
  const [uri, setUri] = useState([]);
  const [description, setDescription] = useState('');
  const createPost = useSelector(st => st.createPost);
  const staticData = useSelector(st => st.static);
  const videoRef = useRef(null);

  const dispatch = useDispatch();

  const onEnd = () => {
    // Reset the video to start playing from the beginning
    if (videoRef.current) {
      videoRef.current.seek(0);
      videoRef.current.play();
    }
  };
  const Camera = async () => {
    const cameraPermission = Platform.OS === 'android' && PERMISSIONS.ANDROID.CAMERA
    const photoLibraryPermission = Platform.OS === 'android' && PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    setUri([])
    setDescription('')
    const cameraPermissionStatus = await check(cameraPermission);
    const photoLibraryPermissionStatus = await check(photoLibraryPermission);
    if (cameraPermissionStatus !== RESULTS.GRANTED && photoLibraryPermissionStatus !== RESULTS.GRANTED) {
      request(cameraPermission);
      request(photoLibraryPermission);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      Camera()
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (createPost.status) {
      setUri([])
      setDescription('')
      navigation.navigate('Home');
    }
  }, [createPost.status]);

  const creatPost = () => {
    let form = new FormData();
    uri.length &&
      uri.forEach(el =>
        el.uri.includes('.mov') ?
          form.append('photos[]', {
            uri: el.uri,
            type: 'image/jpg',
            name: 'photo.jpg',
          }) : form.append('photos[]', {
            uri: el.uri,
            type: 'video/mp4',
            name: 'video.mp4',
          })
        ,
      );
    description && form.append('description', description);

    dispatch(CreatPostAction(form, staticData.token));
  };

  const options = {

  }
  const addPhoto = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 450,
    //   cropping: false,
    //   mediaType: 'mixed',
    //   maxFiles: 2,
    // }).then(image => {
    //   console.log(image, 'image')
    //   let item = [...uri]
    //   item = item.concat(image);
    //   setUri(item);
    // });
    const options = {
      mediaType: 'mixed', // This allows picking both images and videos
      quality: 1,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, (response) => {
      let item = [...uri]
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        const source = { uri: response.assets[0].uri };
        if (response.type && response.type.startsWith('video')) {
          item = item.concat(source)
          // setSelectedMedia({ uri: response.uri, type: response.type });
        } else {
          item = item.concat(source);
          // For image
          // setSelectedMedia(source);
        }
        setUri(item);
      }
    });
  }



  const delateFoto = index => {
    let item = [...uri];
    item.splice(index, 1);
    setUri(item);
  };
  return (
    <View>
      <HeaderWhiteTitle
        loading={createPost.loading}
        onCheck={() => creatPost()}
        check
        onPress={() => {
          navigation.navigate('Home')
        }}
        disabled={uri.length === 0}
        title={t(mainData.lang).Newpublication}
      />
      <View style={styles.wrapper}>
        {uri?.length > 0 && uri?.map((elm, i) => {
          return (
            <View key={i} style={styles.imgWrapper}>
              {!elm.uri.includes('.mov') ?

                <Image
                  style={styles.img}
                  source={{
                    uri: elm.uri,
                  }}
                /> :
                <Video
                  source={{ uri: elm.uri }} // Replace with your video URL
                  style={styles.img}
                  controls={true}
                  resizeMode="cover"
                  onEnd={onEnd}
                  ref={videoRef}
                />
              }
              <TouchableOpacity
                onPress={() => delateFoto(i)}
                style={styles.close}>
                <Text style={{ color: '#cccccc', fontSize: 14, marginTop: -4 }}>x</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <View style={styles.textWrapper}>
        <TextInput
          value={description}
          onChangeText={e => setDescription(e)}
          style={Styles.darkMedium14}
          placeholder={t(mainData.lang).adddescription}
          placeholderTextColor={'#8C9CAB'}
        />
      </View>

      <View style={{ margin: 20 }}>
        {uri.length < 6 &&

          <Button onPress={() => addPhoto()} title={t(mainData.lang).Addphoto} width={120} />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    height: 150,
    width: '31%',
    margin: '1%',
    position: 'relative',
  },
  img: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginHorizontal: 8,
  },
  textWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: AppColors.Solitude_Color,
    borderTopColor: AppColors.Solitude_Color,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  close: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  addImgButton: {
    width: '22%',
    height: 85,
    borderWidth: 1
  }
});
