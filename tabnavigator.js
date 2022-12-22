import React from "react";
import AddStudent from "./addstudent";
import StudentList from "./studentlis";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default function ControlPage () {
    const Tab = createBottomTabNavigator();
    return (
   
         <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="list">
            <Tab.Screen name="add"  component={AddStudent} />
            <Tab.Screen name="list" component={StudentList} />
        </Tab.Navigator>
    );
}