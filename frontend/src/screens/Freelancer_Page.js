const {default: Education} = require('../components/Education');
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as theme from '../constants/theme';
import User_Page from './User_Page';
import AboutSection from './AboutSection';
import * as Freelancer from '../constants/Freelancers';
import ProjectSection from './ProjectSection';

const Tab = createMaterialTopTabNavigator();

function TopTabBar(props) {
  const data = props.data;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AboutSection"
        options={{tabBarLabel: 'About'}}
        children={() => <AboutSection data={data} />}
      />
      <Tab.Screen
        name="Projects"
        options={{tabBarLabel: 'Projects'}}
        children={() => <ProjectSection data={data} />}
      />
    </Tab.Navigator>
  );
}

const Freelancer_Page = props => {
  const [data, setData] = useState({});

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={props.closeModal}>
          <Icon
            name="keyboard-arrow-left"
            size={30}
            color={theme.colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.item.company}</Text>
        <View style={{padding: 20}}></View>
      </View>
      {/* Body */}
      <View style={styles.body}>
        {/* //INJA BOOD SCROLLVIEW  */}
        <View style={styles.companyContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={props.item.logo}
            />
            <Icon
              name="bookmark-border"
              size={25}
              color={theme.colors.black}
              style={{left: 99}}
            />
          </View>
          <Text style={styles.jobTitle}>{props.item.job}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <CommunityIcon name="gmail" size={18} color={theme.colors.black} />
            <CommunityIcon name="github" size={18} color={theme.colors.black} />
            <CommunityIcon
              name="twitter"
              size={18}
              color={theme.colors.black}
            />
            <CommunityIcon
              name="facebook"
              size={18}
              color={theme.colors.black}
            />
            <CommunityIcon
              name="linkedin"
              size={18}
              color={theme.colors.black}
            />
          </View>
          {/*<Text style={styles.jobSalary}>{props.item.salary}</Text>*/}
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.tag, {marginRight: 10}]}>
              <Text style={styles.jobLocation}>{props.item.time}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.jobLocation}>{props.item.loc}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <TopTabBar data={props.item} />
          </View>
        </View>

        {/* Footer */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.btnContainer,
              {
                backgroundColor: theme.colors.blueGrey,
                borderWidth: 1,
                borderColor: theme.colors.silver,
              },
            ]}>
            <CommunityIcon name="chat" size={30} color={theme.colors.white} />
          </View>
          <View
            style={[
              styles.btnContainer,
              {flex: 1, backgroundColor: theme.colors.black, marginLeft: 5},
            ]}>
            <Text
              style={[
                styles.jobTitle,
                {color: theme.colors.white, marginTop: 0},
              ]}>
              Invite
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightWhite,
  },
  header: {
    height: 70,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightWhite,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h4,
  },
  body: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: theme.colors.white,
  },
  companyContainer: {
    padding: 30,
    alignItems: 'center',
  },
  jobTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: theme.sizes.h4,
  },
  jobSalary: {
    marginTop: 5,
    fontWeight: '900',
    fontSize: theme.sizes.h3,
  },
  tag: {
    padding: 7,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.silver,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: theme.sizes.h3,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Freelancer_Page;
