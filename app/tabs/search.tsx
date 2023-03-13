import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import React, { useState } from 'react'
import styles from "../../Style";
import InputField from '../../components/InputField';
import { AntDesign } from '@expo/vector-icons';
import { searchTrend } from '../../components/data'


export const Search = () => {
   const [search, setSearch] = useState('');
   return (
      <View style={{ flex: 1, paddingLeft: 15, }}>
         <View style={styles.searchBar}>
            <Image source={{ uri: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512' }}
               style={styles.searchBarProfile}
            />
            <InputField
               placeholder={'Search Twitter'}
               value={search}
               onChangeText={(text) => {
                  setSearch(text)
               }} />

            <TouchableOpacity style={{ paddingTop: 15, }}>
               <AntDesign name="setting" size={24} color="black" />
            </TouchableOpacity>
         </View>
         <View style={{ flex: 1, marginTop: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
               Trends for you
            </Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewProfile}>
               {searchTrend.map((listData, index) =>
                  <View style={styles.searchDataContainer}
                     key={index}>
                     <Text style={{ color: 'gray', fontSize: 18 }}>{listData.trend}</Text>
                     <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {listData.title}</Text>
                     <Text>{listData.countOfTweet}</Text>
                  </View>
               )}
            </ScrollView>
         </View>
      </View>
   )
}
export default Search;