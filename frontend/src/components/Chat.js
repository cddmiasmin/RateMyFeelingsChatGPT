import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { styleData } from '../data/styleData';
import IconChatGPT from './../../assets/icon.png';
import IconUser from './../../assets/iconUser.jpg';

export default function components({message, history, setHistory}) {

    const [answer, setAnswer] = useState('');

    useEffect(() => {
        // chamando o axios

        setHistory([...history, {
            id: history.lenght,
            text: message,
            answer: 'Iasmin'
        }]);

    }, []);

/*
    useEffect(() => {
        // chamado ao axios
    }, [answer]);
*/
    return (
        <View style={styles.container}>
            <ListItem containerStyle={styles.themeForUser}>
                <Avatar
                    rounded
                    size="medium"
                    source={IconUser}
                />
                <ListItem.Content>
                    <ListItem.Title style={styles.text}>{message}</ListItem.Title>
                </ListItem.Content>
            </ListItem>    
    
            <ListItem containerStyle={styles.themeForChat}>
                <Avatar
                    rounded
                    size="medium"
                    source={IconChatGPT}
                />
                <ListItem.Content>
                    <ListItem.Title style={styles.text}>
                        { 
                            answer === ''
                            ? <ActivityIndicator size="small" color={styleData.colors.white} />
                            : answer
                        }
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: 125,
    },

    text: {
        color: styleData.colors.white
    },

    themeForUser: {
        backgroundColor: styleData.colors.primary
    },

    themeForChat: {
        backgroundColor: styleData.colors.secondary
    }
});

