import { StyleSheet,Text,View,TextInput,Alert } from "react-native";
import { useState } from "react";
import Button from "./button";

export default function AddStudent(){
   // const data = { studentID, name, email, batch, address, contact };
     const [id,setID] = useState('');
     const [name,setName] = useState('');
     const [batch,setBatch] = useState('');
     const [email,setEmail] = useState('');
     const [address,setAddress] = useState('');
     const [contact,setContact] = useState('');
     const data = { id, name, email, batch, address, contact};

     const addStudent = () => {
        fetch(
            `https://imraju.com/labfinal/api/addStudent.php?studentID=${encodeURIComponent(
              data?.id
            )}&name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(
              data.email
            )}&batchNo=${encodeURIComponent(data.batch)}&address=${encodeURIComponent(
              data.address
            )}&contact=${encodeURIComponent(data.contact)}`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status) {
                Alert.alert(`${data.msg}`);
              }
            });
     }
    return(
        <View style={styles.container}>
          <Text style={{alignSelf:"center",fontSize:20}}>Add Student</Text>
          <TextInput onChangeText={(e)=>setID(e)}style={styles.TextInput} placeholder="ID"  />
          <TextInput onChangeText={(e)=>setName(e)}style={styles.TextInput} placeholder="name"  />
          <TextInput onChangeText={(e)=>setEmail(e)}style={styles.TextInput} placeholder="email"  />
          <TextInput onChangeText={(e)=>setBatch(e)}style={styles.TextInput} placeholder="batch"  />
          <TextInput onChangeText={(e)=>setAddress(e)}style={styles.TextInput} placeholder="address"  />
          <TextInput onChangeText={(e)=>setContact(e)}style={styles.TextInput} placeholder="contact"  />
          <View style={{alignSelf:"flex-end"}}>
          <Button  onPress={addStudent} text='Add Student'  />
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