import { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { AppColors } from '../styles/AppColors';
import { SliderModal } from './SliderModal';
import { Styles } from '../styles/Styles';
import Video from 'react-native-video';

import { VideoPlayer } from 'react-native-video-player'
import { PauseSvg, StartSvg, StartSvg2 } from '../assets/svg/Svgs';

const windowWidth = Dimensions.get('window').width;
export const Slider = ({ photo, single, activePhoto, description }) => {
  const [active, setActive] = useState(0);
  const [openSlider, setOpenSlider] = useState(false)
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        data={photo}
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
            Math.floor(event.nativeEvent.layoutMeasurement.width),
          );
          setActive(index);
          activePhoto(index)
        }}
        renderItem={({ item, index }) => {
          let aspectRatio = 1
          if (item.width > item.height) {
            aspectRatio = 0.2 + item.width / item.height
          }
          else {
            aspectRatio = 0.2 + item.height / item.width
          }
          if (aspectRatio > 1) {
            if (single) {
              aspectRatio = 0.65
            }
            else {
              aspectRatio = 0.70
            }
          }
          else if (aspectRatio < 1) {
            if (single) {
              aspectRatio = 0.65

            }
            else {
              aspectRatio = 0.70
            }
          }


          return (
            <TouchableOpacity
              onPress={() => setOpenSlider(true)}
              style={!single ? styles.img : { ...styles.img, width: windowWidth }}>

              {!item.photo.includes('.mp4') ? <Image
                style={[
                  { width: '100%', aspectRatio: aspectRatio ? aspectRatio : 1 },
                ]}
                source={{ uri: `https://chamba.justcode.am/uploads/${item.photo}` }}
                resizeMode={'cover'}
              /> :
                <View style={{ position: "relative" }}>
                  <View
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 99999,
                      margin: 'auto',
                      left: 0,
                      right: 0,
                    }}>
                    <TouchableOpacity
                      onPress={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        togglePlayPause()
                      }}

                      style={{ width: 40, height: 40 }}>
                      {!isPlaying ?

                        <PauseSvg /> :
                        <StartSvg2 />
                      }
                    </TouchableOpacity>
                  </View>
                  <Video
                    // controls={true}
                    paused={isPlaying}
                    repeat={true}
                    ref={videoRef}
                    style={[
                      {
                        width: '100%', aspectRatio: aspectRatio ? aspectRatio : 1,
                        position: 'relative'
                      },
                    ]}
                    source={{ uri: `https://chamba.justcode.am/uploads/${item.photo}` }}
                    resizeMode={'cover'}
                  />
                </View>

              }
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        {photo.length > 1 && photo?.map((elm, i) => (
          <View
            key={i}
            style={[
              styles.pagination,
              i === active && {
                backgroundColor: AppColors.GoldenTainoi_Color,
                borderRadius: 50,
              },
            ]}></View>
        ))}
      </View>
      {openSlider &&

        <SliderModal

          modalVisible={openSlider} activePhoto={active} photo={photo} close={() => setOpenSlider(false)} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    // height: 52220,
    width: windowWidth,
    flexShrink: 0,
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
});
