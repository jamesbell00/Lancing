import React, {useState, useEffect} from 'react';
import { isFocused } from '@react-navigation/native';
import {StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, FlatList} from 'react-native'
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Experience from '../components/Experience'
import Education from '../components/Education'
import {mainUser, setMainUser} from '../Data/User_Info'
import {getFreelancerSkills, getComapnysJobs} from '../../api';

const Exp = [
    {
        id: '1', 
        company: 'Phone Service Center Tunisia',
        start: 'Jan 2018',
        end: 'Feb 2018',
        position: 'Intern',
    },
    {
        id: '2',
        company: '3oulti.tn',
        start: 'May 2020',
        end: 'Jul 2020',
        position: 'Web Master',
    },
    {
        id: '3',
        company: 'Etikks',
        start: 'Jun 2020',
        end: 'Present',
        position: 'Mobile Developer',
    },
]
const Edu = [
    {
        id: '1',
        institute: 'Khaled Ben Walid High School',
        start: 'Jan 2018',
        end: 'Feb 2018',
        diploma: 'Computer Sciences',
    },
    {
        id: '2',
        institute: 'ISET Charguia',
        start: 'Sep 2017',
        end: 'Jun 2020',
        diploma: 'Computer Technologies',
    },
]

const info = [
    {
        year1:'Age, ',
        title1: 'Personal Information', 
        year2:'Date of Birth: ',
        title2: 'Tech Skills', 
        title3: 'Soft Skills',
    },
    {
        year1:'Since ',
        title1: 'Details about Company',
        year2: 'Year Founded: ',
        title2: 'Jobs',   
    }
]
export default function User_Page ({ navigation }){
    const userUnparsed = localStorage.getItem("user")
    const user = JSON.parse(userUnparsed);
    
    
    const[skills,setSkills] = useState([]);
    
    const loadSkills=async(id) => {
        if(user.type_id==1){
            const data = await getFreelancerSkills(id);
            setSkills(data)
        
        }
        else if (user.type_id==2){
            const data = await getComapnysJobs(id);
            setSkills(data)
        }
    }
    useEffect(() =>{  
        loadSkills(user.id)
      }, [isFocused]);
    //console.log(skills.freelancer_id)
    
    return(            
        <View style={{flex: 1}}>
            {/* Header */}
            <View  style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <Icon name="edit" size={30} color={theme.colors.black} />
            </View>

            {/* Body */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* Company Details */}
                <View style={styles.titleContainer}>
                    <Image 
                        style={{width: 100, height: 100, borderRadius: 10}}
                        source={ require('../images/lancing.png') } />
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.nameText}>{user.name}</Text>
                        <Text style={styles.posText}>{info[2-1].year1}{user.year}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="location-on" size={20} color={theme.colors.gray} />
                            <Text style={[styles.posText, {color: theme.colors.gray}]}>{user.address}</Text>
                        </View>
                    </View>
                </View>

                {/* About*/}
                <Text style={styles.titleText}>About {user.name}</Text>
                <Text style={styles.primaryText}>{user.description} </Text>
                {/* More information*/}
                <Text style={styles.titleText}>{info[user.type_id-1].title1}</Text> 
                <Text style={styles.primaryText}>Name: {user.name} </Text>
                <Text style={styles.primaryText}>{info[user.type_id-1].year2}{user.year}</Text>
                <Text style={styles.primaryText}>Address: {user.address} </Text>
                <Text style={styles.primaryText}>Sector: {user.sector_id} </Text>
                <Text style={styles.primaryText}>Number of Employees: {user.no_emp} </Text>
                {/* Contact*/}
                <Text style={styles.titleText}>Contact</Text> 
                <Text style={styles.primaryText}>Email: {user.email} </Text>
                <Text style={styles.primaryText}>Phone: +({user.country_code}) {user.phone} </Text>
                <Text style={styles.primaryText}>Website: {user.website} </Text>
                {/* Files*/}
                <Text style={styles.titleText}>Files and Images</Text>
                <Text style={styles.primaryText}>Image: {user.picture} </Text>
                <Text style={styles.primaryText}>File: {user.file} </Text>
                {/* Tech Skills */}
                <Text style={styles.titleText}>{info[user.type_id-1].title2}</Text>  
                <View>
                    

                    <FlatList 
                        data={skills}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            if(item.category=="Tech"){
                                return (
                                    
                                    <Experience item={item} />
                                )
                                
                            }else if(item.category!="Soft"){
                                return (
                                    
                                    <Experience item={item} />
                                )
                            }
                            
                       
                        }} />
                </View>
                
                {/* Soft Skills */}
                <Text style={styles.titleText}>{info[user.type_id-1].title3}</Text>   
                <View>
                    <FlatList 
                    
                        data={skills}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            if(item.category=="Soft"){
                                return (
                                    <Experience item={item} />
                                )
                            }
                        }} />
                </View>

            
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightWhite
    },
    body: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: theme.colors.lightWhite
    },
    titleContainer: {
        flexDirection: 'row',
    },
    titleTextContainer: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h6,
        color: theme.colors.black
    },
    posText: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    titleText: {
        paddingTop: 20,
        paddingBottom: 7,
        fontWeight: 'bold',
        fontSize: theme.sizes.h4,
        color: theme.colors.black
    },
    primaryText: {
        lineHeight: 30,
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    normalText: {
        paddingTop: 15,
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    }
});