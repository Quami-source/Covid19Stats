import React from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar
}from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';


//components
import Header from './components/Header'
import Info from './components/Info';
import WorldStats from './components/WorldStats';



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://covid19-graphql.netlify.app/'
});

const client = new ApolloClient({
  cache,
  link
});



export default function App(){


  return(
    <ApolloProvider client={client}>
      <View style={{flex:1,backgroundColor:"#eee"}}>
        <Header/>
        <View style={{flex:1,paddingHorizontal:20,}}>
          <Info/>
          <WorldStats/>
        </View>
      </View>
    </ApolloProvider>
    
  )
}