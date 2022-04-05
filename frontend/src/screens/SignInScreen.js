import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SignUpScreen from './SignUpScreen';
import {handleLogin as handleLoginService} from "../../../backend/src/services/loginService"
import {mainUser, setMainUser} from '../Data/User_Info'
import  {useState, useEffect} from 'react';
import {getFreelancersByEmail, getCompanyByEmail} from '../../api';
import { isFocused } from '@react-navigation/native';
import Axios from 'axios';
//import {handleLogin as handleLoginServicess} from "../../../backend/src/services/loginService";//7services/loginService.js";
import {testLog} from '../../api';


const SignInScreen = ({navigation}) => {
  const[userName,setUserName] = useState([]);
  const[userPassword,setUserPassword] = useState([]);
  const[wrongPassword,setWrongPassword] = useState([]);
  const[userType,setUserType] = useState([]);

  const login =()=>{
    console.log("works")
    Axios.post( "http://10.0.2.2:3000/login",{
      email: userName,
      password: userPassword
    }).then((response) => {
      if(response.data.message)
      {setWrongPassword(response.data.message)}
      else{
        navigation.navigate('Home')
        localStorage.setItem("email", JSON.stringify(userName))
        localStorage.setItem("userType", JSON.stringify(response.data.type_id))
        
      }
    });
  };
  //setMainUser(userName,userType);
  

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: theme.colors.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 22, color: theme.colors.black}}>
            LANCING
          </Text> */}
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

        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: theme.colors.black,
            }}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={theme.colors.blueGrey}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" onChangeText={setUserName} style={STYLES.input }  />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={theme.colors.blueGrey}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              onChangeText={setUserPassword}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity onPress={ login}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </View>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {wrongPassword}
              </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              {
                <Image
                  style={STYLES.btnImage}
                  source={require('../images/facebook.png')}
                />
              }
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              {
                <Image
                  style={STYLES.btnImage}
                  source={require('../images/google.png')}
                />
              }
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 25,
            marginBottom: 20,
          }}>
          <Text style={{color: theme.colors.black, fontWeight: 'bold'}}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: theme.colors.blueGrey, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default SignInScreen;
