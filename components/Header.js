import React from 'react';
import {
    View,
    Text
}from 'react-native';

const Header = props =>{
    return(
        <View style={{paddingHorizontal:20,marginVertical:30}}>
            <Text style={{fontSize:30,fontWeight:'700'}}>Covid-19 Stats</Text>
        </View>
    )
}

export default Header;