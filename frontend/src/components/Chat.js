import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@rneui/themed';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { styleData } from '../data/styleData';

export default function components({message, history, setHistory}) {

    const [answer, setAnswer] = useState('');
/*
    useEffect(() => {
        // chamando o axios
    }, []);

    useEffect(() => {
        // chamado ao axios
    }, [answer]);
*/
    return (
        <View style={styles.container}>
            <ThemeProvider theme={themeForUser}>
                <ListItem >
                <Avatar
                    rounded
                    size="medium"
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/608/790/original/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg' }}
                />
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>{message}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
                <ListItem >
                <Avatar
                    rounded
                    size="medium"
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png' }}
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
            </ThemeProvider>
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
    }
});


const theme = {
    ListItem: {
        containerStyle: {
        backgroundColor: styleData.colors.secondary, 
    },
},
};

const themeForUser = {
    ListItem: {
        containerStyle: {
        backgroundColor: styleData.colors.primary, 
    },
},
};