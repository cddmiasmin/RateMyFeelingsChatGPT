import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import Home from './src/screens/Home'
import { styleData } from './src/data/styleData';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: styleData.colors.primary,
  },
});