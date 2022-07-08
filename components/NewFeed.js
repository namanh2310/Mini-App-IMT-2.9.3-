import { Dimensions,ScrollView, Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { newFeedList } from '../data/newfeedList'

export function NewFeed() {

    const { width: screenWidth } = Dimensions.get('window')

    return (
        <ScrollView
        contentContainerStyle={styles.container}
        >
            {newFeedList.map((newfeed, index) => (

            <View
            key={index} 
            style={
                {
                    width: screenWidth*0.92,
                    height: 160,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    display: 'flex',
                    flexDirection:'row',
                    marginBottom: 16
                }
            }
            >
                <Image
                style={styles.imgNF}
                source={{
                    uri: newfeed.src
                }} 
                />
                <View style={styles.modalContent}>
                    <Text style={styles.hashtag}>
                        {newfeed.hashtag}
                    </Text>
                    <Text style={styles.modalTitle}>
                        {newfeed.title}
                    </Text>
                    <Text style={styles.modalDesc}>
                        {newfeed.desc}
                    </Text>
                </View>
            </View>

            ))}
            
        </ScrollView>
    )
    }

    export default NewFeed

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 16
        },     
        imgNF: {
            width: '30%',
            height: '100%',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
        },
        modalContent: {
            width: '60%',
            margin: 24
        },
        hashtag: {
            fontSize: 14,
            color: 'rgba(34,115,254,255)'
        },
        modalTitle: {
            fontSize: 16,
            fontWeight: '800',
            marginTop: 4
        },
        modalDesc: {
            fontSize: 14,
            marginTop: 4,
            color: '#8C8C8C'
        }
        
    });