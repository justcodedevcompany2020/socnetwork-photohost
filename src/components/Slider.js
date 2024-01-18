import { useEffect, useState } from 'react';
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

const windowWidth = Dimensions.get('window').width;
export const Slider = ({ photo, single, activePhoto, description }) => {
  const [active, setActive] = useState(0);
  const [openSlider, setOpenSlider] = useState(false)

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

              <Image
                style={[
                  { width: '100%', aspectRatio: aspectRatio ? aspectRatio : 1 },
                ]}
                source={{ uri: `https://chamba.justcode.am/uploads/${item.photo}` }}
                resizeMode={'cover'}
              />
              {/* {description && <View style={{ paddingHorizontal: 15, position: 'absolute', top: 0, width: '100%', padding: 10, backgroundColor: "rgba(0,0,0,0.5)" }}>
                <Text style={[Styles.darkSemiBold12, { color: 'white' }]}>
                  {description}
                </Text>
              </View>} */}
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
