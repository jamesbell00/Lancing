import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-community/picker';
import * as theme from '../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RollInLeft} from 'react-native-reanimated';
import User_Page from './User_Page';


const SignUpScreen = ({navigation}) => {
  // const [category, setCategory] = useState('Freelancer')   //IS FOR THE PICKER
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
            <View
              style={{alignContent: 'flex-start', alignItems: 'flex-start'}}>
              <Icon
                name="keyboard-arrow-left"
                size={30}
                color={theme.colors.black}
              />
            </View>
          </TouchableOpacity>

          <Image
            style={STYLES.logo}
            source={require('../images/lancing.png')}
          />
        </View>
        <View style={{marginTop: 70}}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: theme.colors.black,
            }}>
            Welcome!
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            Sign up to continue
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          {/* <Text>Select User Type</Text>
          <View style={STYLES.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
              <Picker.Item
                label="Freelancer"
                value="Freelancer"
                category={'freelancer'}
              />
              <Picker.Item
                label="Company"
                value="Company"
                category={'company'}
              />
            </Picker>
          </View> */}

          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={theme.colors.blueGrey}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Name*" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={theme.colors.blueGrey}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email*" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={theme.colors.blueGrey}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password*"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterFreelancer')}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up As Freelancer
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterCompany')}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up As Company
            </Text>
          </View>
          </TouchableOpacity>
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
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../images/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../images/google.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: theme.colors.black, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: theme.colors.blueGrey, fontWeight: 'bold'}}>
              Sign in
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
    marginTop: 20,
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
    marginLeft: 100,
  },

  pickerContainer: {
    color: theme.colors.blueGrey,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: theme.colors.blueGrey,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 16,
  },

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default SignUpScreen;
