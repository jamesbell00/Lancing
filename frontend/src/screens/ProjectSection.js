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
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Experience from '../components/Experience';
import * as theme from '../constants/theme';
import * as company from '../constants/jobs';
import * as Freelancer from '../constants/Freelancers';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const JobsProject = ({item}) => {
  //const id = parseInt(item.id);
  
  return (
    <View style={styles.container}>
      {/* <Image
              source={item.logo}
              borderRadius={10}
              style={{width: 40, height: 40}} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.jobTitle}>g{item.company}</Text>
        <View
          style={{
            flexDirection: 'row',

            padding: 2,
          }}>
          <Icon name="business" size={17} color={theme.colors.black} />
          <Text>{item.company}</Text>
          <Icons
            name="clock-check-outline"
            size={17}
            color={theme.colors.black}
            style={{
            marginLeft: 7
          }}
          />
          <Text>{item.duration}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="more-vert" size={30} color={theme.colors.black} />
      </View>
    </View>
  );
};
// function ExperienceProject ({ item }) {
//   return(
//       <View style={styles.container}>
//           <View>
//               <Icon name="keyboard-arrow-right" size={20} color={theme.colors.black} />
//           </View>
//           <View style={styles.bodyContainer}>
//               <Text style={styles.primaryText}>{item.title}</Text>
//               {/* <Text style={styles.primaryText}>{item.company}</Text>
//               <Text style={styles.secondText}>{item.start} - {item.end}</Text> */}
//           </View>
//       </View>
//   )
// }

const ProjectSection = props => {
  const item = props.data;

  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            

            {/* Contact */}
            <Text style={styles.jobTitle}>Contact</Text>
            <Text style={styles.descriptionText}>Phone: +{item.country_code} {item.phone} </Text>
            <Text style={styles.descriptionText}>Email: {item.email} </Text>
            <Text style={styles.descriptionText}>Website: {item.website} </Text>
            <Text style={styles.descriptionText}>Address: {item.address}</Text>
            
          
            
          </View>
        </ScrollView>
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

export default ProjectSection;
