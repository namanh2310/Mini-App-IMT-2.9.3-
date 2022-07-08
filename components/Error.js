import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';

export function Error() {
  return (
    <View style={styles.errorContainer}>
        <FontAwesomeIcon size={48} color={'#737373a4'} icon={faFaceSadCry} />
        <Text style={styles.errorText}>
            Sorry, this feature is not developed yet!
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    errorContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70%',
    },

    errorText: {
        fontSize: 40,
        color: '#737373a4',
        textAlign: 'center'
    }
    
  });