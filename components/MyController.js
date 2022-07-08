// not in use
import { TouchableOpacity,StyleSheet,TextInput,View, Text } from 'react-native'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBullhorn, faBell, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigation  } from "@react-navigation/native";

export function MyController() {

    const navigation = useNavigation();

    const [active, setActive] = React.useState(0)

    const handleActive = (btn , id) => {
        setActive(id)
        navigation.navigate(btn.title)
    } 

    const BtnData = [

        {
            id: 1,
            size: 26,
            color: '#737373',
            icon: faHouse,
            title: 'Home'
        },
        {
            id: 2,
            size: 26,
            color: '#737373',
            icon: faBullhorn,
            title: 'Announcments'
        },
        {
            id: 3,
            size: 26,
            color: '#737373',
            icon: faBell,
            title: 'Notifications'
        },
        {
            id: 4,
            size: 26,
            color: '#737373',
            icon: faUserGroup,
            title: 'Members'
        },

    ]

    return (
        <View style={styles.controller}>
            {BtnData.map((btn, index) => (
                <TouchableOpacity 
                style={styles.controllerBtn}
                onPress = {() => handleActive(btn,index)}
                >
                    <FontAwesomeIcon  color={index === active ? 'rgba(34,115,254,255)' : '#737373'} size={btn.size} icon={btn.icon}/>
                    <Text style={index === active ? styles.controllerTextActive : styles.controllerText }>
                        {btn.title}
                    </Text>
                </TouchableOpacity> 
            ))}
        </View>
    )
    }

    const styles = StyleSheet.create({
        controller: {
            width: '100%',
            height: 80,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },

        controllerBtn: {
            display: 'flex',
            alignItems: 'center',
        },

        controllerText: {
            color: '#737373'
        },

        controllerTextActive: {
            color: 'rgba(34,115,254,255)'
        }
        
    });