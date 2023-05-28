import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Button } from '@rneui/themed';



export default function Header({message, setMessage}) {
    
   
    return (
      <View style={styles.container}>
            <Button 
                icon={<Entypo name="menu" size={24} color='white' />}
                type="clear"
            />
            <Text style={styles.title}>
                {message === '' ? 'New Chat' : message}
            </Text>
            <Button 
                icon={<Entypo name="plus" size={24} color='white' />}
                type="clear"
                onPress={() => setMessage('')}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: StatusBar.currentHeight,
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

