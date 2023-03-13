import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../Style';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const TopBar = () => {
    const router = useRouter()
    return (
        <View style={styles.topBarStyle}>
            <View style={styles.myProfile}>
                <TouchableOpacity onPress={() => router.push('/Profile/')}>
                    <Image source={{ uri: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512' }}
                        style={styles.profilePictureStyle}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <AntDesign name="twitter" size={25}
                    color='#00b9ff' />
            </TouchableOpacity>

        </View>
    )
}
export default TopBar;

