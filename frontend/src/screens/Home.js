import { StyleSheet, View } from 'react-native';
import Header from './../components/Header';
import Chat from './../components/Chat';
import NewChatModel from '../components/NewChatModel';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {

  const [message, setMessage] = useState('');
  const [history, setHistory] = useState('');

  return (
    <View style={styles.container}>
      <Header message={message} setMessage={setMessage}/>
      { message === '' 
        ? <NewChatModel/>
        : <Chat message={message} history={history} setHistory={setHistory}/> 
      }
      <Footer setMessage={setMessage}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});