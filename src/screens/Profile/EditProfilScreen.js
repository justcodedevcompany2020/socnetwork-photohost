import { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { CakeSvg, DownArrow, DownArrow1, EditAvaterSvg, EmailSvg, GenderSvg, LocationSvg, NetWorkSvg, PhoneSvg, ProfetionsSvg, WorkLocation } from '../../assets/svg/Svgs';
import { AppColors } from '../../styles/AppColors';
import { Styles } from '../../styles/Styles';
import React, { useEffect } from 'react';
import { HeaderWhiteTitle } from '../../headers/HeaderWhiteTitle.';
import { UpdateIkInfoAction, chnageAvatarAction, chnageUserProfil } from '../../store/action/action';
import { ClearChangeAvatar, ClearChangeProfile } from '../../store/action/clearAction';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { BootomModal } from '../../components/BootomSheet';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CityModal } from '../../components/CityModal';
import { MountWrapper } from '../../components/MountWrapper';

export const EditProfilScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState('');
  const [calendar, setCalendar] = useState(false)
  const [city, setCity] = useState(false)
  const [openMount, setOpenMout] = useState(false)
  const [data1, setData] = useState([
    { name: 'Январь', id: 0 },
    { name: 'Февраль', id: 1 },
    { name: 'Март', id: 2 },
    { name: 'Апрель', id: 3 },
    { name: 'Май', id: 4 },
    { name: 'Июнь', id: 5 },
    { name: 'Июль', id: 6 },
    { name: 'Август', id: 7 },
    { name: 'Сентябрь', id: 8 },
    { name: 'Октябрь', id: 9 },
    { name: 'Ноябрь', id: 10 },
    { name: 'Декабрь', id: 11 },
  ])
  const handlePresentModalPress = useCallback(() => { bottomSheetRef.current?.present(); }, []);

  const handelPress = (type) => {
    if (type == 'Пол') {
      handlePresentModalPress()
    }
    else if (type == 'Дата рождения') {
      setCalendar(true)
    }
    else if (type === 'Город') {
      setCity(true)
    }
  }

  const [error, setError] = useState('');
  const user = useSelector(st => st.userData);
  const staticdata = useSelector(st => st.static);
  const changeProfil = useSelector(st => st.changeUserProfil);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['20%'], []);
  const changeAvatar = useSelector(st => st.changeAvatar);
  const [imgUrl, setImgUrl] = useState('');
  const [imgFile, setImgFile] = useState();
  const [cityName, setCityName] = useState('')
  const [day, setDay] = useState()
  const [mount, setMount] = useState()
  const [year, setYera] = useState()
  const [dym, setDym] = useState()
  const [data, setDate] = useState([
    { type: 'button', value: '', svg: <LocationSvg />, placeholder: 'Город', disabled: true, id: '' },
    { type: 'calendar', value: '', svg: <CakeSvg />, placeholder: 'Дата рождения', disabled: true, value2: '' },
    { type: 'button', value: '', svg: <GenderSvg />, placeholder: 'Пол', disabled: true },
    { type: 'input', value: '', svg: <ProfetionsSvg />, placeholder: 'Профессия/Сфера деятельности', disabled: true },
    { type: 'input', value: '', svg: <WorkLocation />, placeholder: 'Место работы', disabled: true },
    { type: 'input', value: '', svg: <NetWorkSvg />, placeholder: 'Сайт', disabled: true },
    { type: 'input', value: '', svg: <EmailSvg />, placeholder: 'Почта', disabled: false },
    { type: 'input', value: '', svg: <PhoneSvg />, placeholder: 'Телефон', disabled: true },
  ])

  useEffect(() => {
    if (day && mount?.id && year) {
      const newDateFormat = `${year}.${mount?.id}.${day}`;
      const initialDate = new Date(2021, 10, 22)
      hadnelChange(1, newDateFormat, 'typ2', newDateFormat)
      setCalendar(false)
    }
  }, [day, mount, year])

  const SetData = () => {
    // const year = user?.allData?.data.date_of_birth.split('-')[0];
    setYera(user?.allData?.data?.date_of_birth?.split('-')[0])
    let d = user?.allData?.data?.date_of_birth?.split('-')[2].slice(0, 2)
    if (d?.length > 0 && d[0] == 0) {
      setDay(d[1])
    }
    else {
      setDay(d)
    }

    let m = user?.allData?.data?.date_of_birth?.split('-')[1]
    if (m?.length > 0 && m[0] == 0 && m.length == 2) {
      m = +m[1]
    }

    setMount(data1[m])
    const dateComponents = JSON.stringify(user?.allData?.data?.date_of_birth)?.substring(0, 11)?.split('-')
    const year = dateComponents && dateComponents[0]?.replace(`"`, '')
    const day = dateComponents && dateComponents[2]
    const month = dateComponents && dateComponents[1]
    const newDateFormat = `${day}-${month}-${year}`;

    let item = [...data]
    setCityName(user?.allData?.data?.city?.name)
    item[0].value = user?.allData?.data?.city?.name ? user?.allData?.data?.city?.name : ''
    item[1].value = user?.allData?.data?.date_of_birth ? user?.allData?.data?.date_of_birth?.substring(0, 11) : ''
    item[1].value2 = newDateFormat ? newDateFormat : ''
    item[2].value = user?.allData?.data?.gender ? user?.allData?.data?.gender : ''
    item[3].value = user?.allData?.data?.mgu ? user?.allData?.data?.mgu : ''
    item[4].value = user?.allData?.data?.work_type ? user?.allData?.data?.work_type : ''
    item[5].value = user?.allData?.data?.web ? user?.allData?.data.web : ''
    item[6].value = user?.allData?.data?.email ? user?.allData?.data.email : ''
    item[7].value = user?.allData?.data?.phone ? user?.allData?.data.phone : ''
    setDate(item)
  }

  useEffect(() => {
    if (!name) {
      setUsername(user.username);
      setName(user.name);
      setDiscription(user.description);
    }
    SetData()
  }, [user]);
  const changeImg = () => {
    ImagePicker.openPicker({
      width: 80,
      height: 80,
      cropping: true,
    }).then(image => {
      setImgUrl(image.path);
      setImgFile(image);
    });
  };
  const dispatch = useDispatch();
  const hadnelChange = (i, value, type, value2) => {
    let item = [...data]
    if (type == 'city') {
      item[i].value = value.name
      item[0].id = value.id

    } else if (i == 1) {
      item[i].value = value
      item[i].value2 = value2
    }
    else {
      item[i].value = value
    }
    setDate(item)
  }
  const chnageProfil = () => {
    let send = true
    if (username === user.data.nickname && name === user.data.name && imgUrl === '') {
      navigation.goBack();
    }
    if (username === user.data.nickname && name === user.data.name) {
      send = false
    }
    if (username === '') {
      setError('Введите корректный  ФИО/Название канала');
    } else if (name === '') {
      setError('Введите корректный  имя');
    } else {
      setError('');
    }
    if (error === '' && send) {
      dispatch(
        chnageUserProfil(
          {
            name: name,
            nickname: username,
            description: discription,
          },
          staticdata.token,
        ),
      );
    }
    console.log(data[1].value, 'data1')
    if (imgUrl) {
      dispatch(chnageAvatarAction(imgUrl, staticdata.token));
    }
    dispatch(UpdateIkInfoAction({
      city_id: data[0].id,
      date_of_birth: data[1].value,
      // date_of_birth: '2002-02-22',

      gender: data[2].value,
      mgu: data[3].value,
      work_type: data[4].value,
      web: data[5].value,
      phone: data[7].value,
    }, staticdata.token))
    navigation.navigate('ProfileScreen');
    dispatch(ClearChangeProfile());
    dispatch(ClearChangeAvatar())
  };

  const hadnelChange1 = (e) => {
    setMount(e)
  }

  const handleConfirm = (date) => {
    const dateComponents = JSON.stringify(date).substring(1, 11)?.split('-')
    const year = dateComponents[0]
    const day = dateComponents[2]
    const month = dateComponents[1]
    const newDateFormat = `${day}-${month}-${year}`;
    hadnelChange(1, JSON.stringify(date).substring(1, 11), newDateFormat)
    setCalendar(false)
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderWhiteTitle
        loading={changeProfil.loading || changeAvatar.loading}
        onCheck={() => chnageProfil()}
        check
        onPress={() => navigation.goBack()}
        title={'Редактировать профиль'}
      />
      <View style={{ alignItems: 'center', marginVertical: 40 }}>
        <View style>
          <Image
            style={styles.img}
            source={{
              uri: imgUrl
                ? imgUrl
                : `https://chamba.justcode.am/uploads/${user.data.avatar}`,
            }}
          />

          <TouchableOpacity onPress={() => changeImg()} style={styles.edit}>
            <EditAvaterSvg />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textWrapper}>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          style={Styles.darkMedium14}
        />
      </View>
      <View style={styles.textWrapper}>
        <TextInput
          value={username}
          onChangeText={e => setUsername(e)}
          style={Styles.darkMedium14}
        />
      </View>
      <View style={styles.textWrapper}>
        <TextInput
          placeholder="кратко о себе"
          placeholderTextColor={'#8C9CAB'}
          value={discription}
          onChangeText={e => setDiscription(e)}
          style={Styles.balihaiMedium14}
        />
      </View>

      <View>
        <Text style={[Styles.darkRegular16, { paddingHorizontal: 15, marginTop: 30 }]}>Доп. информация</Text>
        {data.map((elm, i) => {
          if (elm.type == 'input') {
            return <View key={i} style={styles.textWrapper2}>
              {elm.svg}
              <TextInput
                editable={elm.disabled}
                placeholder={elm.placeholder}
                placeholderTextColor={'#8C9CAB'}
                value={elm.value}
                onChangeText={e => hadnelChange(i, e)}
                style={[Styles.balihaiMedium14, { width: '90%' }]}
              />
            </View>
          }
          else if (elm.type == 'calendar') {
            return <View style={styles.calnedarView} key={i}>
              <View style={{ width: '28%' }}>
                <Text style={styles.clandatLable}>День</Text>
                <TextInput
                  value={day}
                  onChangeText={((e) => {
                    if (e <= 31) {
                      setDay(e)
                    }
                  })} keyboardType='numeric' style={styles.calendarInput} />
              </View>
              <View style={{ width: '28%', height: 45 }}>
                <Text style={styles.clandatLable}>Месяц</Text>
                <View style={styles.clandarTochable}>
                  <TouchableOpacity onPress={() => setOpenMout(true)} style={styles.calendarInput} >
                    <Text style={styles.calsendarText}>{mount?.name}</Text>
                  </TouchableOpacity>
                  <View style={styles.calsendarVector}>
                    <DownArrow1 />
                  </View>
                </View>
              </View>
              <View style={{ width: '28%' }}>
                <Text style={styles.clandatLable}>Год</Text>
                <TextInput keyboardType='numeric' value={year} onChangeText={(e) => {
                  if (e <= 2024) {
                    setYera(e)
                  }
                }}
                  style={styles.calendarInput} />
              </View>
            </View>
          }
          else {
            return <TouchableOpacity onPress={() => handelPress(elm.placeholder)} key={i} style={[styles.textWrapper2, { paddingVertical: 25, justifyContent: "space-between" }]}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {elm.svg}
                {i == 1 ?
                  <Text style={[Styles.balihaiRegular14, { marginHorizontal: 10 }]}>{elm.value2 ? elm.value2 : elm.placeholder}</Text> :
                  <Text style={[Styles.balihaiRegular14, { marginHorizontal: 10 }]}>{elm.value ? elm.value : elm.placeholder}</Text>}
              </View>
              <DownArrow />
            </TouchableOpacity>
          }
        })}
      </View>
      <Text
        style={[[Styles.tomatoMedium10, { textAlign: 'center', marginTop: 10 }]]}>
        {error || changeProfil.error}
      </Text>
      {/* <DateTimePickerModal
        isVisible={calendar}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => { }}
      /> */}
      <View style={{ position: 'absolute' }}>
        <BootomModal ref={bottomSheetRef} snapPoints={snapPoints}>
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity onPress={() => {
              hadnelChange(2, 'Мужской')
              bottomSheetRef.current?.close()
            }} style={{ marginBottom: 20, marginTop: 20 }} >
              <Text style={Styles.darkRegular14}>Мужской</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              hadnelChange(2, 'Женский')
              bottomSheetRef.current?.close()

            }} style={{ marginBottom: 20 }}>
              <Text style={Styles.darkRegular14}>Женский</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              hadnelChange(2, 'Не указывать')
              bottomSheetRef.current?.close()
            }} style={{ marginBottom: 20 }}>
              <Text style={Styles.darkRegular14}>Не указывать</Text>
            </TouchableOpacity>
          </View>
        </BootomModal>
      </View>
      {city && <CityModal onPress={(e) => hadnelChange(0, e, type = 'city')} close={() => setCity(false)} visible={city} />}
      {openMount && <MountWrapper onPress={(e) => hadnelChange1(e)} close={() => setOpenMout(false)} visible={openMount} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imgWrapper: {
    width: 80,
    height: 80,
    position: 'relative',
  },
  edit: {
    position: 'absolute',
    bottom: -5,
    right: 0,
  },
  textWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: AppColors.Solitude_Color,
    borderBottomWidth: 1,
  },
  textWrapper2: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: AppColors.Solitude_Color,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calnedarView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    position: 'relative'
  },
  calendarInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: AppColors.Solitude_Color,
    height: 47,
    textAlign: 'center'
  },
  clandatLable: {
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    zIndex: 22,
    left: 5,
    width: 45,
    textAlign: 'center'
  },
  clandarTochable: {
    justifyContent: 'center',
    width: "100%",
    height: '100%',
  },
  calsendarVector: {
    position: 'absolute',
    right: 10,
  },
  calsendarText: {
    position: 'absolute',
    height: '100%',
    top: 10,
    left: 10,
  }
});

