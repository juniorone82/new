import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Database from 'react';

export default function AppItem(props){
    async function handleEditpress(){
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForms", item);
    }


    return(
        <view style={StyleSheet.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style= {style.buttonsContainer}> 
            <TouchableOpacity style={styles.deleteButton} >
                <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} 
                OnPress={handleEditpress}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>

        </view>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
  });
