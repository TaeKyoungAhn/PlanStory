import React from "react";
import { StyleSheet, View, Pressable, Text, Platform } from "react-native";


interface Props{
    title : string;
    onPress: ()=> void;
    backgroundColor?: string;
    color?: string;
}

const CustomButton = (prop: Props) => {
    const{title,onPress,background, color,width, height, margin } = props;
    return (
        
    );
}
