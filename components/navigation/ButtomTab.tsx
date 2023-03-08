import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../Style';

export const ButtomTab = () => {
    return (
<View style={styles.ButtomTabStyle}>
    <TouchableOpacity>
        <Entypo name="home" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Feather name="search" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
        <MaterialIcons name="fiber-smart-record" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="ios-notifications-outline" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
        <Feather name="mail" size={24} color="black" />
    </TouchableOpacity>
</View>
    )
}
export default ButtomTab;
