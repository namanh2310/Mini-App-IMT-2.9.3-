import { StyleSheet,TextInput,View, Text } from 'react-native'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function MyHeader({title}) {
  return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Text style={styles.text}>
                  {title}
                </Text>
            </View>

            <View style={styles.searchBar}>
                <View style={styles.searchContent}>
                    <FontAwesomeIcon size={18} color={'rgba(238,242,254,255)'} icon={faMagnifyingGlass} />
      
                    <TextInput 
                    style={styles.searchText}
                    placeholder="Search"
                    />
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 128,
      backgroundColor: "rgba(34,115,254,255)",
      display: 'flex',
      alignItems: "center"
    },
  
    headerTitle: {
      marginTop: 28,
    },
  
    text: {
      fontSize: 24,
      color: 'rgba(238,242,254,255)',
      fontWeight: '700'
    },
  
    searchBar: {
      width: '90%',
      height: 40,
      marginTop: 8,
      backgroundColor: 'rgba(75,155,253,255)',
      borderRadius: 6
    },
  
    searchContent: {
      height: '100%',
      display: 'flex',
      flexDirection: "row",
      marginLeft: 12,
      alignItems: "center"
    },
  
    searchText: {
      width: '100%',
      marginLeft: 8,
      color: 'rgba(238,242,254,255)'
    }
  });
