import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from '../components/Loader';
import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterFreelancer = ({navigation}) => {
  const [userFName, setUserName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userPhone, setuserPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const LNameInputRef = createRef();
  const ageInputRef = createRef();
  const cityInputRef = createRef();
  const countryInputRef = createRef();
  const addressInputRef = createRef();
  const PhoneInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userFName) {
      alert('Please fill First Name');
      return;
    }
    if (!userLName) {
      alert('Please fill Last Name');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userPhone) {
      alert('Please fill phone');
      return;
    }
    if (!userCity) {
      alert('Please fill City');
      return;
    }
    if (!userCountry) {
      alert('Please fill Country');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userFName,
      Lname: userLName,
      age: userAge,
      address: userAddress,
      phone: userPhone,
      city: userCity,
      country: userCountry
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
    if (isRegistraionSuccess) {
      return (
        
          <View style={{flex: 1,backgroundColor: theme.colors.white,justifyContent: 'center'}}>
          <Image
            source={require('../images/google.png')}
            style={{
              height: 150,
              resizeMode: 'contain',
              alignSelf: 'center'
            }}
          />
          <Text style={styles.successTextStyle}>
            Registration Successful
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('User_Page')}>
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </View>
        
      );
    }

  return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: theme.colors.white,
    }}>
    <View style={{marginTop: 10}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
       <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
         
          <TouchableOpacity onPress={() => navigation.goBack()}>
                      <View style={{alignContent:'flex-start', alignItems:'flex-start'}}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color={theme.colors.black}
            /></View>
          </TouchableOpacity>

          <Image
            style={STYLES.logo}
            source={require('../images/lancing.png')}
          />
        </View>
        <View style={{marginTop: 70}}>
  
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            Freelancer Registration
          </Text>
        </View>

        {/* FILL IN  */}
        <KeyboardAvoidingView enabled>
        <View style={{marginTop: 10}}>

          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.input}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="First Name*"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                LNameInputRef.current && LNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.input}
              onChangeText={userLName => setUserLName(userLName)}
              underlineColorAndroid="#f000"
              placeholder="Last Name*"
              keyboardType="email-address"
              ref={LNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                PhoneInputRef.current && PhoneInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.input}
              onChangeText={userPhone => setuserPhone(userPhone)}
              underlineColorAndroid="#f000"
              placeholder="Phone Number*"
              keyboardType="numeric"
              ref={PhoneInputRef}
              returnKeyType="next"
              // secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.input}
              onChangeText={UserAge => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Age*"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current && addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}> 
            <TextInput
              style={STYLES.input}
              onChangeText={userCity => setUserCity(userCity)}
              underlineColorAndroid="#f000"
              placeholder="City*"
              autoCapitalize="sentences"
              ref={cityInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}> 
            <TextInput
              style={STYLES.input}
              onChangeText={userCountry => setUserCountry(userCountry)}
              underlineColorAndroid="#f000"
              placeholder="Country*"
              autoCapitalize="sentences"
              ref={countryInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={STYLES.inputContainer}> 
            <TextInput
              style={STYLES.input}
              onChangeText={UserAddress => setUserAddress(UserAddress)}
              underlineColorAndroid="#f000"
              placeholder="Address*"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={STYLES.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
             <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              REGISTER
            </Text>
          </View>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  input: {
    color: theme.colors.blueGrey,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: theme.colors.blueGrey,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: theme.colors.blueGrey,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom:20
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},
  logo: {
    width: 95,
    height: 130,
    alignContent: 'center',
    marginLeft:100
    
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});



export default RegisterFreelancer;
