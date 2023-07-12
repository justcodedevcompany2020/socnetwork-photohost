import {useState} from 'react';
import {View, Text} from 'react-native';
import {Styles} from '../../styles/Styles';
import {Input} from '../../ui/Input';

export const LoginScreen = () => {
    const [login,setLogin] = useState({
        placeholder:"Введите пароль",
        error:'',
        pass:false,
        value:''
    })
  return (
    <View style={Styles.authScreen}>
      <Text style={[Styles.darkMedium22, {marginBottom: 30}]}>Вход</Text>
        <Input
          placeholder={login.placeholder}
          error={login.error}
          pass={login.pass}
          value={login.value}
          setPass={() => setLogin()}
        />
        {/* <Input
          placeholder={elm.placeholder}
          error={elm.error}
          pass={elm.pass}
          value={elm.value}
          setPass={() => setLogin()}
        /> */}
      <View style={Styles.flexSpaceBetween}>
        <Text style={Styles.darkMedium12}>Забыли пароль?</Text>
        <Text style={Styles.darkMedium12}>Регистрация</Text>
      </View>
    </View>
  );
};
