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
import * as Freelancer from '../constants/Freelancers';

const Tab = createMaterialTopTabNavigator();

const AboutSection = props => {
  const item = props.data;

  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* profession Details */}
          <View>
            <Text style={styles.jobTitle}>About Me</Text>
            <Text style={styles.descriptionText}>{item.About}</Text>
            {/* Experience */}
            <Text style={styles.jobTitle}>Experience</Text>
            <View>
              <FlatList
                data={item.Exp}
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
                data={item.Edu}
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

export default AboutSection;
