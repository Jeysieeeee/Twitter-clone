import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    marginTop: 90,
    marginLeft: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal:40,
    paddingVertical: 5,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    alignSelf: 'center'
  },
  orText: {
    fontSize: 23,
    alignSelf: 'center',
   
  },
  buttonCreate: {
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: 5,
    paddingHorizontal:87,
    paddingVertical: 23,
    borderRadius: 50,
    backgroundColor: '#00b9ff',
    borderWidth: 0,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
  textLinkContainer: {
    marginTop: 16,
    marginLeft: 0,
  },
  loginTextContainer: {
    marginTop: 130,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logintoTwitterStyle: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '500',
  },
  input: {
    paddingLeft: 16,
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  submitButton: {
    alignItems: 'center',
    marginTop: 15,
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00b9ff',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:15,
    color: '#FFFFFF',
  },
  login: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
    color: '#FFFFFF',
  }
});

export default styles;