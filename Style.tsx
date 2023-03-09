import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  twitterLogo: {
    width: 60,
    height: 50,
    alignSelf: 'center',
    marginTop: 100
  },
  twitterLogoOnBoarding: {
    width: 40,
    height: 33,
    alignSelf: 'center',
    marginTop: 50
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
    paddingHorizontal: 40,
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
    justifyContent: 'center',
    marginTop: 5,
    paddingHorizontal: 87,
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
  createAccountText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  loginText: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  forgetPasswordCointainer: {
    paddingTop: 15,
    flexDirection: 'row',
  },
  //STYLE FOR NEWS FEED
  scrollView: {
    marginTop: 30,
    flex: 1,

  },
  dataContainer: {
    flexDirection: 'row',
    paddingRight: 2,
    paddingTop: 12,

  },
  profilePictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  dataDetails: {
    marginTop: 10,
    flex: 1,
    height: '100%',
  },
  dataName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataUserName: {
    fontSize: 18,
    color: '#777',
  },
  styleName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContent: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  contentText: {
    fontSize: 16,
    paddingBottom: 5,
  },
  interactions: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomTabStyle: {
    marginVertical: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarStyle: {
    marginVertical: 25,
    height: 50,
    flexDirection: 'row',

  },
  myProfile: {
    marginRight: 100,
  }
});

export default styles;