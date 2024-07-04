import { ActivityIndicator, Alert, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const validate = () => {
    let valid = true;
    if (email === "") {
      setBadEmail(true);
      valid = false;
    } else {
      setBadEmail(false);
    }

    if (password === "") {
      setBadPassword(true);
      valid = false;
    } else {
      setBadPassword(false);
    }

    if (valid) {
      setLoader(true);
      getData();
    }
  };

  const getData = async () => {
    try {
      const aEmail = await AsyncStorage.getItem('EMAIL');
      const aPassword = await AsyncStorage.getItem('PASSWORD');
      if (email === aEmail && password === aPassword) {
        setTimeout(() => {
          setLoader(false);
          navigation.navigate("Home");
        }, 1000);
      } else {
        setLoader(false);
        Alert.alert("Please enter correct Email Id and Password");
      }
    } catch (error) {
      setLoader(false);
      Alert.alert("Error accessing data");
      console.error("Error reading AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/logo.png')}
        style={styles.img}
      />
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
      {badEmail && <Text style={styles.wrongInp}>Please Enter Email Id</Text>}
      <View style={[styles.input2, badPassword && { borderColor: "red" }]}>
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
      <TouchableOpacity style={styles.btn} onPress={validate}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.text2} onPress={() => { navigation.navigate("SignUp") }}>Create New Account</Text>
      {loader && (
        <Modal transparent={true} animationType="fade" style={styles.modal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ActivityIndicator size={"large"} color={"green"} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default LogIn;

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
    marginBottom: 50
  },
  text: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "700",
    color: "#000"
  },
  input: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    width: 300,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  input2: {
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
    marginTop: 30,
    color: "#e4007c",
    textDecorationLine: "underline",
    fontWeight: "600"
  },
  btn: {
    height: 50,
    width: 250,
    backgroundColor: "#e4007c",
    marginTop: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700"
  },
  wrongInp: {
    fontSize: 15,
    color: "red"
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  }
});
