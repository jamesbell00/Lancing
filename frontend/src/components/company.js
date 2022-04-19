import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity, Modal, View, Text, Image} from 'react-native'
import * as theme from '../constants/theme'
import Freelancer_Page from '../screens/Freelancer_Page'
import Axios from 'axios';
//import img from '../../../backend/uploads/Freelancer/2/images/j.jpg' 

const Company = ({item}) => {
    const id = parseInt(item.id)
    const [jobVisible, setJobVisible] = useState(false)

    const ToggleJobVisible = () => {
        setJobVisible(!jobVisible)
    }
    const userUnparsed = localStorage.getItem("user")
    const user = JSON.parse(userUnparsed);
    const [bookmark, setBookMark] = useState("bookmark-border");
    const save =()=>{
        var query=""
        var inputs={}
        setBookMark("bookmark")
        if(user.type_id==1){
            query="http://10.0.2.2:3000/SaveJob"
            inputs={
                freelancer_id: user.freelancer_id,
                job_id: item.item_id
              }
        }else if(user.type_id==2){
            query="http://10.0.2.2:3000/SaveFreelancer"
            inputs={
                freelancer_id: item.item_id,
                job_id: 1,
                company_id: user.company_id
              }
        }
        Axios.post( query,inputs).then((response) => {
          console.log(response.data)
          
        });
      };

    return(
        <TouchableOpacity 
            onPress={localStorage.setItem("itemId", JSON.stringify(item.item_id)),() =>   ToggleJobVisible()}
            style={[styles.container, id%2==0 ? {backgroundColor: theme.colors.white} : {backgroundColor: theme.colors.black} ]}>
            
            <Modal 
                animationType="slide" 
                visible={jobVisible}
                onRequestClose={() => ToggleJobVisible()}>
                    <Freelancer_Page closeModal={() => ToggleJobVisible()} item={item} />
            </Modal>
            
            <View style={styles.header}>
                <Image
                    source={require(`../images/image1.png`)}
                    borderRadius={10}  
                    style={{width: 40, height: 40}} />
                    
                {/*<Text style={[styles.jobSalary, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.salary}</Text>*/}
                <TouchableOpacity onPress={save}>
                    <Icon name={bookmark} size={30} style={[ id%2==0 ? {color: theme.colors.white} : {color: theme.colors.white} ]} />
                 </TouchableOpacity>
            </View>
            <Text style={[styles.jobTitle, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.title}</Text>
            <Text style={[styles.jobLocation, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.subtitle}</Text> 
            <View style={styles.tagContainer}>
                <View style={[styles.tag, {marginRight: 8}, id%2==0 ? {backgroundColor: theme.colors.lightBlack} : {backgroundColor: theme.colors.lightWhite} ]}>
                    <Text style={[styles.jobLocation, {fontWeight: 'bold'}, id%2==0 ? {color: theme.colors.lightWhite} : {color: theme.colors.lightBlack} ]}>{item.detail}</Text>
                </View>
                <View style={[styles.tag, id%2==0 ? {backgroundColor: theme.colors.lightBlack} : {backgroundColor: theme.colors.lightWhite} ]}>
                    <Text style={[styles.jobLocation, {fontWeight: 'bold'}, id%2==0 ? {color: theme.colors.lightWhite} : {color: theme.colors.lightBlack} ]}>{item.totalmatch}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 165,
        width: 220,
        padding: 20,
        marginLeft: 20,
        marginRight: 5,
        borderRadius: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    jobSalary: {
        fontWeight: '900' ,
        fontSize: theme.sizes.h3
    },
    jobTitle: {
        marginTop: 10,
        fontWeight: '900' ,
        fontSize: theme.sizes.h3
    },
    jobLocation: {
        marginTop: 3,
        fontWeight: '900' ,
        fontSize: theme.sizes.h2
    },
    tagContainer: {
        flexDirection: 'row'
    },
    tag: {
        flex: 1,
        padding: 5,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
})

export default Company