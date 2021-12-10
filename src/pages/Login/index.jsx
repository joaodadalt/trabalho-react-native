import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from './styles';
import logo from '../../../assets/logo.png';

export default function Login() {
  return (
    
    <View style={styles.container}>

      <StatusBar backgroundColor="#FFF" translucent={false} />

      <Image source={logo} style={styles.logo} />

      <TextInput placeholder="Celular, username ou email" style={styles.input} />  

      <TextInput placeholder="Senha" style={styles.input} />  

      <View style={styles.forgotcontainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>    
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookTexty}>Entre com o Facebook</Text>
      </TouchableOpacity>  

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%' }} >OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signuptext}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={StyleSheet.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

