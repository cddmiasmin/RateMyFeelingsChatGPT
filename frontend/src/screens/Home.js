import { StyleSheet, View } from 'react-native';
import Header from './../components/Header'
import Footer from '../components/Footer';

export default function Home() {
    return (
      <View style={styles.container}>
        <Header />
        <Footer />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
});