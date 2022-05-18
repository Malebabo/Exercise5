import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';

export default function Details({photo}){
    return(
        <Image style = {{ width: '100%' }} source = {photo}/>
    )};