import React, {useState} from 'react';
import {
  StyleSheet, 
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Materiel Top
import Home from "./home";
import About from "./about";
import Experience from "./experience";

const Tab = createMaterialTopTabNavigator();

function TopTabBar (props) {
    const data = props.data;
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' options={{ tabBarLabel: 'Home' }} children={() => <Home data={data} />} />
            <Tab.Screen name='About' options={{ tabBarLabel: 'About' }} children={() => <About data={data} />} />
            <Tab.Screen name='Experience' options={{ tabBarLabel: 'Experience' }} children={() => <Experience data={data} />} />
        </Tab.Navigator>
    );
}

const Profile = ({navigation}) => {
    const [data, setData] = useState({});

    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
            <Image
                resizeMode='cover'
                style={styles.headerImage}
                source={require('../../assets/images/avatar.png')} />
            <Text style={styles.headerText}>
                <Text>Hi, </Text>
                <Text style={{fontWeight: Typography.FONT_WEIGHT_BOLD}}>{token.firstName}</Text>
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate(routes.ProfileStack)}>
                    <Icon name="segment" size={25} color={Colors.WHITE} />
            </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
            <View style={{flex: 1}}>
                <TopTabBar data={data} />
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    // Header
    headerContainer: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    headerImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    headerText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 20,
        color: '#FFF'
    },
    // Body
    bodyContainer: {
        flex: 1
    },
  });

export default Profile;

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
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Freelancer Details */}
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
                <CommunityIcon
                  name="gmail"
                  size={18}
                  color={theme.colors.black}
                />
                <CommunityIcon
                  name="github"
                  size={18}
                  color={theme.colors.black}
                />
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
            <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ tabBarLabel: 'experiences' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: 'reviews' }}
        />
      </Tab.Navigator>
            {/* profession Details */}
            <View>
              <Text style={styles.jobTitle}>About Me</Text>
              <Text style={styles.descriptionText}>{props.item.About}</Text>
              {/* Experience */}
              <Text style={styles.jobTitle}>Experience</Text>
              <View>
                <FlatList
                  data={props.item.Exp}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    return <Experience item={item} />;
                  }}
                />
              </View>
  
              {/* Education */}
              <Text style={styles.jobTitle}>Education</Text>
              <View>
                <FlatList
                  data={props.item.Edu}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    return <Education item={item} />;
                  }}
                />
              </View>
  
              {/* Languages */}
              <Text style={styles.jobTitle}>Languages</Text>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 10,
                  marginBottom: 20,
                }}>
                <Text style={styles.normalText}>Spanish</Text>
                <Text style={styles.normalText}>French</Text>
                <Text style={styles.normalText}>English</Text>
              </View>
            </View>
          </ScrollView>
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
  
  
  function FeedScreen() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text >About Me</Text>
                {/*<Text style={styles.descriptionText}>{props.item.About}</Text>*/}
        </View>
      );
    }
    
    function NotificationsScreen(props) {
      const data = props.data;
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Notifications!</Text>
        </View>
      );
    }
    
    function ProfileScreen() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Profile!</Text>
        </View>
      );
    }
  
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
  