import React, { useState } from "react";
import { View, Text } from "react-native";
import moment from 'moment';
import { SimpleLineIcons } from "@expo/vector-icons";

const globalTotal = {
  cases: 3232490,
  recovered: 1007971,
  deaths: 228513,
};

const ghanaStats = {
  cases: 2074,
  deaths: 17,
  recovered: 212,
};

let date = moment();
//let today = date.getDate()
const WorldStats = (props) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          marginVertical: 20,
          height: 100,
          borderRadius: 5,
          borderWidth: 0.1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <SimpleLineIcons
            name="globe"
            color="#0029FA"
            size={25}
            style={{ flex: 0.5, paddingHorizontal: 10, paddingVertical: 10 }}
          />
          <Text style={{ flex: 5, fontSize: 18, paddingVertical: 10 }}>
            Global Statistics
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#0029fa" }}>Confirmed</Text>
            <Text>{globalTotal.cases.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </Text>
          </View>

          <View>
            <Text style={{ color: "#7ED955" }}>Recovered</Text>
            <Text>{globalTotal.recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </Text>
          </View>

          <View>
            <Text style={{ color: "#F24130" }}>Deaths</Text>
            <Text>{globalTotal.deaths.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginVertical: 20,
          height: 100,
          borderRadius: 5,
          borderWidth: 0.1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <SimpleLineIcons
            name="globe"
            color="#0029FA"
            size={25}
            style={{ flex: 0.5, paddingHorizontal: 10, paddingVertical: 10 }}
          />
          <Text style={{ flex: 5, fontSize: 18, paddingVertical: 10 }}>
            Ghana Statistics
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#0029fa" }}>Confirmed</Text>
            <Text>{ghanaStats.cases} </Text>
          </View>

          <View>
            <Text style={{ color: "#7ED955" }}>Recovered</Text>
            <Text>{ghanaStats.recovered} </Text>
          </View>

          <View style={{ height: 100 }}>
            <Text style={{ color: "#F24130" }}>Deaths</Text>
            <Text>{ghanaStats.deaths} </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginVertical: 20,
          height: 100,
          borderRadius: 5,
          borderWidth: 0.1,
        }}
      >
        <Text style={{fontSize:22,fontWeight:'600',paddingHorizontal:20,paddingVertical:10}}>Last Updated</Text>
        
        
        <View style={{paddingHorizontal:20}}>
            <Text>{date.format('DD/MM/YYYY')} </Text>
        </View>
        
      </View>
    </View>
  );
};

export default WorldStats;
