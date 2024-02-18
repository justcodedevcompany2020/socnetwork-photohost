import { useNavigation } from "@react-navigation/native"

import { View, Dimensions, Image, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Styles';
import { t } from './lang';
import { useSelector } from "react-redux";
const windowWidth = Dimensions.get('window').width;

export const Albom = ({ data, user, loading, seved, post }) => {
  const navigation = useNavigation()
  const mainData = useSelector(st => st.mainData);
  if (loading) {
    return <View style={Styles.loading}>
      <ActivityIndicator size="large" color="#FFC24B" />
    </View>
  }
  return (
    <View style={{ marginTop: 20, width: '99%' }}>
      <View
        style={[
          {
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 14,
          },
        ]}>
        {data.map((elm, i) => {
          console.log(elm, 'elm')
          if (seved) {
            return (
              <TouchableOpacity key={i} onPress={() => navigation.navigate('SinglPageScreen', {
                id: elm.post?.photo[0]?.post_id, isBook: true
              })}>
                <Image
                  style={[styles.img, {
                    width: windowWidth / 2 - 25,
                    height: windowWidth / 2 - 25,
                    // margin: 5,
                  }]}
                  source={{
                    uri: `https://chamba.justcode.am/uploads/${elm.post?.photo[0]?.photo}`,
                  }}
                />
              </TouchableOpacity>
            );
          }
          else {
            return (
              <TouchableOpacity key={i} onPress={() => navigation.navigate('SinglPageScreen', { id: elm.id, isBook: elm.auth_user_book?.length > 0 })}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `https://chamba.justcode.am/uploads/${elm?.photo[0]?.photo}`,
                  }}
                />
              </TouchableOpacity>
            );
          }
        })}
        {data.length === 0 &&
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            {user ?
              <Text style={Styles.darkMedium16}>{t(mainData.lang).noPublications}</Text> :
              <Text style={[Styles.darkMedium16, { textAlign: 'center' }]}>{seved ? t(mainData.lang).Bookmarklistisempty : t(mainData.lang).noPublications}</Text>
            }
          </View>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: windowWidth / 2 - 25,
    height: windowWidth / 2 - 25,
    borderRadius: 15,
  },
});
