import React, { useEffect, useState } from "react";
import { Animated, Button, Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert } from '@rneui/base';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={['#adff2f', '#00ffff', '#00bfff', '#0000cd','#4b0082','#800080']}
          start={{x:-0.1, y:0.2}}
          end={{x:1, y:1}}
          locations={[0.01,0.2,0.3,1,1,1]} >
          <Header />
        </LinearGradient>
        <View style={{paddingTop: 200, alignItems:'center', justifyContent:'center', flex:1}}>
          <View>
            <Text>Library Screen</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
