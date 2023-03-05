import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import styles from './Style';
import Buttons from './Landing-Page/Google-Button'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'}}
  style={{width: 40, height: 33}}
/>
<Text style= {styles.text}>
  See what’s happening in the world right now.
</Text>
<Buttons  style ={styles.button}
  title="Press me" onPress={() => 
  alert('Button pressed')} />


      <StatusBar style="auto" />
    </View>
  );
}
