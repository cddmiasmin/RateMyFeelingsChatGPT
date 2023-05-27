import {  View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Button } from '@rneui/themed';

export default function Header() {
    return (
      <View style={styles.container}>
            <Button 
                icon={<Entypo name="menu" size={24} color='white' />}
                type="clear"
                
            />
            <Text style={styles.title}>
                New Chat
            </Text>
            <Button 
                icon={<Entypo name="plus" size={24} color='white' />}
                type="clear"
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 55,
      height: 50,
      borderBottomColor: 'white',
      borderBottomWidth: 0.6,
      paddingLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

