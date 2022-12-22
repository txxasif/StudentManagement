import { View,Text ,FlatList,StyleSheet ,Alert} from "react-native";
import { useState,useEffect } from "react";
function Student({item}){
    console.log(item);
    return(
        <View style={{borderWidth:1,padding:10,margin:10}}>
            <Text>Student ID: {item.student_id}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Batch : {item.batch_no}</Text>
             <Text>Address: {item.address}</Text>
            <Text>contact :{item.contact}</Text>
        </View>
    )   
    
}
export default function StudentList(){

    const [data,setData] = useState([]);
    function getStudent() {
        fetch('https://imraju.com/labfinal/api/allStudents.php').then((res)=>res.json()).then((data)=>{
            setData(data.students);
            console.log(data);})
    }
    useEffect(()=>{
        getStudent();
        console.log(data);
    },[data.length])
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                        <Student key={item.id} item={item}/>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    student:{
        borderWidth:1,
        padding:10,
        margin:10,
                backgroundColor:'white'
        
    }
})