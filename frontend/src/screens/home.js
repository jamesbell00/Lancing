import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Modal, ScrollView, Text, TextInput, TouchableOpacity, FlatList, StatusBar} from 'react-native'
import * as theme from '../constants/theme'
import * as company from '../constants/jobs';
import Company from '../components/company';
import * as Freelancer from '../constants/Freelancers';
import Jobs from '../components/jobs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FilterModal from '../components/filterModal';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useIsFocused } from '@react-navigation/native';
import {getHomePageCompany, getHomePageFreelancers} from '../../api';
import {mainUser, setMainUser} from '../Data/User_Info'

export default function Home ({ navigation }) {
    const [filterVisible, setFilterVisible] = useState(false)

    const ToggleFilterVisible = () => {
        setFilterVisible(!filterVisible)
    }
    
    const[homePageDatabase,setHomePageDatabase] = useState([]);
    const isFocused = useIsFocused();
    const userId=1;                             /// USERID only usig this for now, when login is done, this will be updated
    const userTypeId= 1;                      /// USERTYPE only usig this for now, when login is done, this will be updated
    const loadHomePageDatabase=async() =>{
        
        if(userTypeId==1){
            const data = await getHomePageFreelancers(userId);
            setHomePageDatabase(data)
            console.log("hello")
            
        }
        else if (userTypeId==2){
            const data = await getHomePageCompany(userId);
            setHomePageDatabase(data)
        }
        
    }
    useEffect(() =>{  
        loadHomePageDatabase()
      }, [isFocused]);
    const email='james.bell@slu.edu'
    setMainUser(email)
    const userUnparsed = localStorage.getItem("user")
    const user = JSON.parse(userUnparsed);

    return(       
       <View style={{flex: 1}}>
       <StatusBar backgroundColor={theme.colors.blueGrey}/> 
           <Modal 
                animationType="slide" 
                visible={filterVisible}
                onRequestClose={() => ToggleFilterVisible()}>
                    <FilterModal closeModal={() => ToggleFilterVisible()} />
            </Modal>

            <View>

                {/* Header */}
                <View  style={styles.header}>
                    <TouchableOpacity >
                    <FontAwesome5 name="bars" size={25} color={theme.colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('User_Page')}>
                        <Icon name="person-outline" size={30} color={theme.colors.black} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                     
                    {/* Title */}
                    <View>
                        <Text style={styles.title, { fontSize: 20, margin: 20}}>Hi User,</Text>
                        <Text style={styles.title, {fontSize:24, paddingLeft:20, fontWeight:'bold'}}>Find Your Perfect Team Member</Text>
                    </View>

                    {/* Search */}
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInputContainer}>
                            <Icon name="search" size={25} color={theme.colors.silver} />
                            <TextInput 
                                placeholder='Search for a freelancer..' />
                        </View>
                        <TouchableOpacity style={styles.searchIconContainer} onPress={() => ToggleFilterVisible()}>
                            <Feather name="sliders" size={25} color={theme.colors.white} />
                        </TouchableOpacity>
                    </View>

                    {/* Suggested Profiles */}
                    <View style={styles.popularContainer}>
                        <Text style={[styles.popularText, {marginLeft: 20}]}>Suggested Profiles</Text>
                        <FlatList 
                            data={homePageDatabase}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={{flex: 1}} >
                                        <Company item={item} />
                                    </TouchableOpacity>
                                )
                            }} />
                    </View>

                    {/* Other Freelancer */}
                    <View style={[styles.popularContainer, {marginRight: 20, marginLeft: 20, marginBottom: 70}]}>
                        <Text style={styles.popularText}>Other Freelancers</Text>
                        <FlatList 
                            data={homePageDatabase}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Jobs item={item} />
                                )
                            }} />
                    </View>
                </ScrollView>
            </View>
            
       </View>
    )
}

const styles =StyleSheet.create({
    header: { // is for the top bar (profile of user and setting)
        padding: 15,
        flexDirection: 'row',
        borderRadius: 0,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.blueGrey
    },
    container: { // the container of the Whole page (from Hi Name to Recent Profiles)
        backgroundColor: theme.colors.blueGrey,
        borderRadius: 0
    },
    title: { // for the Title Above the Search bar
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: theme.sizes.h6,
        color: theme.colors.black 
    },
    searchContainer: {
        marginTop: 15,
        marginLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    searchInputContainer: { // is for the SEARCH bar
        flex: 1,
        padding: 1,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.white
    },
    searchIconContainer: { // for the filter (icon)
        padding: 12,
        marginLeft: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.blueGrey
    },
    popularContainer: { // popular Section
        paddingTop: 20,
    },
    popularText: { // texts for above profiles (popular and recent)
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20
    },

    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '100%',
        justifyContent: 'space-evenly'
    }
    
})