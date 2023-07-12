import { TouchableOpacity} from 'react-native';
import { BackArrow } from '../assets/svg/Svgs';

export const Header = ({onPress}) =>{
    return <TouchableOpacity onPress ={onPress} style = {{height:50,justifyContent:'center',paddingHorizontal:20}}>
<<<<<<< HEAD
        {/* <BackArrow /> */}
=======
        <BackArrow />
>>>>>>> 8887f9791afeb729887811d00b63aa6e6cfd6ee3
    </TouchableOpacity>
}