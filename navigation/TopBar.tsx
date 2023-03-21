import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../Style';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const TopBar = () => {
    const router = useRouter()
    return (
        <View className='flex space-x-28 flex-row p-3 border-b-2 border-gray-300'>
            <View>
                <TouchableOpacity onPress={() => router.push('/Profile/')}>
                    <Image source={{ uri: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512' }}
                        className=' w-12 h-12 rounded-full '
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

