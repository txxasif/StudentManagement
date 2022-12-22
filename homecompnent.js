import { View,Text, } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./signin";
import SignUp from "./signup";

const Tab = createBottomTabNavigator();
export default function HomeContainer (){
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator initialRouteName="signUp">
            <Tab.Screen name="signUp" component={SignUp} />
            <Tab.Screen name="signin" component={SignIn} />
        </Tab.Navigator>

    )
}
