import React from "react";

import {
    View,
    Text,
    ScrollView,
    SafeAreaView

} from 'react-native'
import FlatCard from "./components/FlatCard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/ContactList";


const Project2 =()=>{

    return(
        <SafeAreaView>
            <ScrollView>
                <FlatCard/>
                <ElevatedCards/>
                <FancyCards/>
                <ActionCards/>
                <ContactList/>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Project2