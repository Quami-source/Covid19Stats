import React from 'react';
import{
    View,
    Text
}from 'react-native';

const Info = props =>{
    return(
        <View style={{backgroundColor:'#5fbaa7',
                        paddingHorizontal:10,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                        
                        }}>
            <Text style={{fontWeight:'700',fontSize:25,color:'#fff'}}>Info</Text>
            <Text style={{fontWeight:'200',color:'#fff',fontSize:17}}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Text>
            <Text style={{fontWeight:'200',color:'#fff',fontSize:17,paddingTop:10}}>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</Text>
        </View>
    )
}

export default Info;