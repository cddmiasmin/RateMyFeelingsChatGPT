import {
    KeyboardAvoidingView, View, StyleSheet, Text, Linking
} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { Feather } from '@expo/vector-icons'; 
import { styleData } from '../data/styleData';

export default function Footer() {
    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{marginTop: 100}}
        >
            <View style={styles.container}>
                <View style={styles.boxMessage}>
                    <Input
                        placeholder='Send a message...'
                        style={styles.input}
                        
                    />
                    <Button
                        type='clear'
                        title={<Feather name="send" size={18} color="white" />}
                        style={{ overflow: 'hidden'}}
                    />  
                </View>
                <Text style={styles.description}>
                    Free Research Preview. ChatGPT may produce inaccurate information about people, 
                    places, or facts. 
                    <Text
                        style={styles.descriptionLink}
                        onPress={() => { 
                            Linking.openURL('https://help.openai.com/en/articles/6825453-chatgpt-release-notes'); 
                          }} 
                    >
                        ChatGPT May 24 Version
                    </Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#f0dc74'
    },

    container: {
        borderColor: styleData.colors.white,
        borderTopWidth: 0.6,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 105,
        gap: 5
    },

    boxMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 50,
        backgroundColor: styleData.colors.secondary,
        height: 55,
        borderRadius: 10,
    },

    description: {
        color: styleData.colors.white,
        fontSize: 10,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },

    descriptionLink: {
        textDecorationLine: 'underline'
    },

    input: {
        width: 10,
        color: styleData.colors.white
    }
});
