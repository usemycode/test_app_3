import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginView = () => {
    const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = () => {
    // Handle login logic here
    if(!emailRef.current || !passwordRef.current){
        Alert.alert('Sign In', "Please fill all the field");
        return;
    }
    console.log('Email:', emailRef.current, 'Password:', passwordRef.current);
  };

  return (
    <View style={styles.container}>
      <Icon name="person" size={100} color="#FFEB3B" style={styles.personIcon} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please login to your account</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => (emailRef.current = text)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => (passwordRef.current = text)}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forget your email?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> router.push('signUp')}>
          <Text style={styles.footerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  personIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFEB3B',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFEB3B',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  forgotText: {
    color: '#FFEB3B',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFEB3B',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#FFEB3B',
    marginRight: 5,
  },
  footerLink: {
    color: '#FFEB3B',
    fontWeight: 'bold',
  },
});

export default LoginView;