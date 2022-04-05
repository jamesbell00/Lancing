import React, {useState, useEffect} from 'react';
import { isFocused } from '@react-navigation/native';
const {default: Education} = require('../components/Education');
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
import {getFreelancerSkills, getJobSkills} from '../../api';

const info = [
  {
      title1: 'Job', 
      title2: 'Budget',
      title3: 'Duration',
      title4: 'Job Description'
  },
  {
      title1: 'Freelancer',
      title2: 'Age',
      title3: 'Location',
      title4: "Freelancer's CV"
  }
]

const Tab = createMaterialTopTabNavigator();

const AboutSection = props => {
  const userUnparsed = localStorage.getItem("user")
  const user = JSON.parse(userUnparsed);
  const userTypeUnparsed = localStorage.getItem("userType")
  const userType = JSON.parse(userTypeUnparsed);
  const item = props.data;
  const[skills,setSkills] = useState([]);
    
    const loadSkills=async(id) => {
        if(userType==1){
            const data = await getJobSkills(id);
            setSkills(data)
        
        }
        else if (userType==2){
            const data = await getFreelancerSkills(id);
            setSkills(data)
        }
    }
    useEffect(() =>{  
        loadSkills(1)
      }, [isFocused]);

    
    
  

  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* About*/}
            <Text style={styles.jobTitle}>About {info[userType-1].title1} </Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            {/* More Information */}
            <Text style={styles.jobTitle}>More Information</Text>
            <Text style={styles.descriptionText}>{info[userType-1].title2}: {item.line2}</Text>
            <Text style={styles.descriptionText}>{info[userType-1].title3}: {item.line3}</Text>
  
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

            {/* Files */}
            <Text style={styles.jobTitle}>{info[userType-1].title4}</Text>
            <Text style={styles.descriptionText}>{item.file} </Text>
            <Text style={styles.jobTitle}>Tech Skills Required</Text>

            {/* Skills Required */}
            <View>
              <FlatList
                data={skills}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  if(item.category=="Tech"){ 
                    console.log(item.category)
                    return (
                      
                        <Experience item={item} />
                    )
                    
                  }
                }}
              />
            </View>

            {/* Soft Skills */}
            <Text style={styles.jobTitle}>Soft Skills required</Text>
            <View>
              <FlatList
                data={skills}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  if(item.category=="Soft"){
                                
                    return (
                        <Experience item={item} />
                    )
                    
                }
                }}
              />
            </View>
            {/* Languages */}
            
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
