import { StyleSheet,Text,View,TextInput, Alert} from "react-native";
import { useState } from "react";
import Button from "./button";
export default function SignIn({navigation}){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dataa = {email,password};
    const LoginStatus = () => {
      fetch(
        `https://imraju.com/labfinal/api/login.php?email=${encodeURIComponent(
          dataa?.email
        )}&password=${encodeURIComponent(dataa?.password)}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        if(data.status=="true"){
          navigation.navigate("ControlPage");
        }else{
          Alert.alert("Please Register")
        }
        });
    };
    return(
        <View style={styles.container}>
          <Text style={{alignSelf:"center",fontSize:20}}>Sign In</Text>
       
          <TextInput onChangeText={setEmail} style={styles.TextInput} placeholder="email" keyboardType="email-address" />
          <TextInput onChangeText={setPassword} style={styles.TextInput} placeholder="password" secureTextEntry={true}/>
          <View style={{alignSelf:"flex-end"}}>
          <Button  onPress={LoginStatus} text='Sign In' />
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