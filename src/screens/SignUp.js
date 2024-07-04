import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPass, setBadConfirmPass] = useState(false);
  const [badName, setBadName] = useState(false);
  const [badNumber, setBadNumber] = useState(false);

  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const numberReg = /^[6-9][0-9]{9}$/;
  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/;

  const validate = () => {
    let valid = true;

    if (name === "") {
      setBadName(true);
      valid = false;
    } else {
      setBadName(false);
    }

    if (!numberReg.test(number)) {
      setBadNumber(true);
      valid = false;
    } else {
      setBadNumber(false);
    }

    if (!emailReg.test(email)) {
      setBadEmail(true);
      valid = false;
    } else {
      setBadEmail(false);
    }

    if (!passReg.test(password)) {
      setBadPassword(true);
      valid = false;
    } else {
      setBadPassword(false);
    }

    if (password !== confirmPass) {
      setBadConfirmPass(true);
      valid = false;
    } else {
      setBadConfirmPass(false);
    }

    if (valid) {
      saveData();
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("NUMBER", number);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("PASSWORD", password);
      console.log(name, number, email, password);
      navigation.goBack();
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
      Alert.alert("Error", "An error occurred while saving your data.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/logo.png')}
        style={styles.img}
      />
      <View style={[styles.input, badName && { borderColor: "red" }]}>
        <Image source={require("../image/user.png")} style={styles.logo} />
        <TextInput
          placeholder='Enter Name'
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inp}
        />
      </View>
      {badName && <Text style={styles.wrongInp}>Please Enter Name</Text>}
      
      <View style={[styles.input, badNumber && { borderColor: "red" }]}>
        <Image source={require("../image/mobile.png")} style={styles.logo} />
        <TextInput
          placeholder='Enter Mobile Number'
          keyboardType="phone-pad"
          value={number}
          onChangeText={(text) => setNumber(text)}
          style={styles.inp}
        />
      </View>
      {badNumber && <Text style={styles.wrongInp}>Please Enter Valid Number</Text>}
      
      <View style={[styles.input, badEmail && { borderColor: "red" }]}>
        <Image source={require("../image/gmail.png")} style={styles.logo} />
        <TextInput
          placeholder='Enter Email Id'
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inp}
        />
      </View>
      {badEmail && <Text style={styles.wrongInp}>Please Enter Valid Email Id</Text>}
      
      <View style={[styles.input, badPassword && { borderColor: "red" }]}>
        <Image source={require("../image/lock.png")} style={styles.logo} />
        <TextInput
          placeholder='Enter Password'
          style={styles.inp}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      {badPassword && <Text style={styles.wrongInp}>Please Enter Password</Text>}
      
      <View style={[styles.input, badConfirmPass && { borderColor: "red" }]}>
        <Image source={require("../image/approve.png")} style={styles.logo} />
        <TextInput
          placeholder='Confirm Password'
          style={styles.inp}
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          secureTextEntry={true}
        />
      </View>
      {badConfirmPass && <Text style={styles.wrongInp}>Passwords do not match</Text>}
      
      <TouchableOpacity style={styles.btn} onPress={validate}>
        <Text style={styles.btnText}>Create New Account</Text>
      </TouchableOpacity>
      
      <Text style={styles.text2} onPress={() => { navigation.goBack() }}>Already Have Account</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 30
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    width: 300,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    width: 25,
    height: 25
  },
  inp: {
    marginLeft: 10,
    color: "#e4007c",
    flex: 1
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
    color: "#e4007c",
    textDecorationLine: "underline",
    fontWeight: "600"
  },
  btn: {
    height: 50,
    width: 250,
    backgroundColor: "#e4007c",
    marginTop: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700"
  },
  wrongInp: {
    fontSize: 15,
    color: "red"
  }
});
