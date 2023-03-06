import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
    text: {
      
      marginTop: 90,
      fontFamily:'Arial',
      fontSize: 35,
      color: 'black',
      fontWeight: 'bold',
 
    },
    button: {
      alignSelf: 'center',
      marginTop:20,
      width: 300,
      height: 70,
      borderRadius:50,
      borderWidth:2,
      borderStyle: 'solid',
    },
    buttonText: {
    marginTop: 15,
    marginLeft: 50,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight:'bold'
    },
  orText: {
    fontSize: 25,
    alignSelf:'center',
    fontWeight: 'bold',
  },
  buttonCreate: {
    alignItems: 'center',
      marginTop:5,
      width: 300,
      height: 70,
      borderRadius:50,
      backgroundColor:'#00b9ff',
  },
  hyperlinkStyle: {
    color: 'blue',
  },
  textLinkContainer: {
    marginTop: 10,
    marginLeft: 0,
  }, 
  LoginContainer: {
    marginTop: 95,
  }
  });

  export default styles;