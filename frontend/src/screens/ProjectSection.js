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
  const id = parseInt(item.id);
  return (
    <View style={styles.container}>
      {/* <Image
              source={item.logo}
              borderRadius={10}
              style={{width: 40, height: 40}} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.jobTitle}>{item.title}</Text>
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
    {
      /* Body */
    },
    (
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.popularContainer,
              {marginRight: 10, marginLeft: 10, marginBottom: 70},
            ]}>
            {/* <View>
              <FlatList
                data={item.Exp}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return <Experience item={item} />;
                }}
              />
            </View> */}
            <FlatList
              data={item.projects}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return <JobsProject item={item} />;
              }}
            />
          </View>
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  tag: {
    padding: 7,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.silver,
  },

  container: {
    marginBottom: 17,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: theme.colors.silver,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  iconContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: theme.colors.black,
  },
  jobLocation: {
    fontSize: theme.sizes.h2,
    color: theme.colors.silver,
  },
});

export default ProjectSection;
