import { View, TouchableOpacity ,Image} from 'react-native';
import styles from '../../Style';
import { AntDesign } from '@expo/vector-icons';

export const TopBar = () => {
    return (
 <View style={styles.TopBarStyle}>
    <View style={styles.myProfile}>
    <Image source={{ uri: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512'}} 
    style={styles.profilePictureStyle} />
    </View>
    <TouchableOpacity>
    <AntDesign name="twitter" size={25} 
    color='#00b9ff' />
    </TouchableOpacity>
       
</View>

    )}
   export default TopBar;
  
