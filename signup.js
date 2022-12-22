import { StyleSheet,Text,View,TextInput,Alert } from "react-native";
import Button from "./button";
import { useState } from "react";

export default function SignUp({navigation}){
    const [name, setName] = useState('');
    const [email,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');
    const data ={name,email,password,contact,address};
    const registration = () => {
        fetch(
          `https://imraju.com/labfinal/api/registration.php?name=${encodeURIComponent(
            data?.name
          )}&email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(
            data.password
          )}&contact=${encodeURIComponent(
            data.contact
          )}&address=${encodeURIComponent(data.address)}`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.msg == "Successfully Registered"){
                Alert.alert(
                  "Success",
                  "Registration Successful",
                );
                navigation.n
                   
            }else if(data.msg == "Looks like the User already exits."){
                Alert.alert("Looks like the User already exits.");
            }else{
                Alert.alert("All the fields are required");
            }
          });
      };
    return(
        <View style={styles.container}>
          <Text style={{alignSelf:"center",fontSize:20}}>Sign Up</Text>
          <TextInput onChangeText={(e)=>setName(e)} style={styles.TextInput} placeholder="name"  />
          <TextInput onChangeText={(e)=>setMail(e)} style={styles.TextInput} placeholder="email" keyboardType="email-address" />
          <TextInput onChangeText={(e)=>setPassword(e)} style={styles.TextInput} placeholder="password" secureTextEntry={true}/>
          <TextInput onChangeText={(e)=>setContact(e)} style={styles.TextInput} placeholder="contact" />
          <TextInput onChangeText={(e)=>setAddress(e)} style={styles.TextInput} placeholder="address" />
          <View style={{alignSelf:"flex-end"}}>
          <Button  onPress={registration} text='Sign Up' />
          </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:60,


    },
    TextInput:{
        borderWidth:1,
        padding:10,
        margin:10
    }
});