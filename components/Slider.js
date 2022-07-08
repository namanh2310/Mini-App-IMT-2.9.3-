import { Dimensions,ScrollView, Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { imgList } from '../data/imgList'
import { dotList } from '../data/dotList'

export function Slider() {

    const [imgIndex, setImgIndex] = React.useState(0)

    const { width: screenWidth } = Dimensions.get('window')

    const handleScroll = (e) => {
        if(!e) {
            return
        }
        const {nativeEvent} = e
        if(nativeEvent && nativeEvent.contentOffset) {
            const currentOffset = nativeEvent.contentOffset.x
            setImgIndex(Math.round(currentOffset/screenWidth))
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle = {{ width: screenWidth * 4, marginBottom: 0}}
            showsHorizontalScrollIndicator = {false}
            scrollEventThrottle = {16}
            onScroll = {handleScroll}
            >
                {imgList.map((data, index) => (
                    <View key={index}>
                        <Image 
                        style = {{width: screenWidth, height: 280, borderWidth: 12, borderColor: '#F2F2F2'}}
                        source={{
                            uri: data.src,
                        }}
                        />
                        
                        <View style={styles.trendingContainer}>
                            <FontAwesomeIcon icon={data.trendingIcon} size={24} color={'white'}/>
                            <Text style={styles.trendingTitle}>{data.trendingTitle}</Text>
                        </View>
                       
                        <View style={styles.hashtagContainer}>
                            <View style={styles.hashtagBox}>
                                <Text style={styles.hashtagText}>
                                    {data.hashtag.first}
                                </Text>
                            </View>

                            <View style={data.hashtag.second ? styles.hashtagBox : {backgroundColor: 'transparent'}}>
                                <Text style={styles.hashtagText}>
                                    {data.hashtag.second}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.sliderTitle}>
                            {data.title}
                        </Text>
                    </View> 
                ))}
            </ScrollView>

                        
            <View style={styles.sliderDots}>
                {dotList.map((dot,index) => (
                    <View key={index} style={imgIndex === dot.id ? styles.dotActive : styles.dot}>
                    </View>
                ))}
                           
            </View>
        </View>
    )
    }

    export default Slider

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#adadad42'
        },     
        sliderTitle: {
            width: '90%',
            position: 'absolute',
            bottom: '15%',
            left: '8%',
            fontSize: 22,
            color: 'white',
            fontWeight: '600',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        hashtagContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            bottom: '35%',
            left: '8%'
        },
        hashtagBox: {
            alignSelf: 'flex-start',
            backgroundColor: 'rgba(0, 0, 0, 0.301)',
            marginRight: 16,
            padding:2
        },
        hashtagText: {
            color: 'white'
        },
        trendingContainer: {
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            top: '12%',
            left: '8%'
        },
        trendingTitle: {
            fontSize: 18,
            color: 'white',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            marginLeft: 4
        },
        sliderDots: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 16
        },
        dot: {
            width: 10,
            height: 10,
            backgroundColor: '#adadad42',
            borderRadius: 100,
            marginLeft: 6,
            marginRight: 6
        },
        dotActive: {
            width: 10,
            height: 10,
            backgroundColor: 'rgba(34,115,254,255)',
            borderRadius: 100,
            marginLeft: 6,
            marginRight: 6
        }
    });
