import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import FotoDoDia from './components/fotoDoDia';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fotoDoDia}>
        <FotoDoDia></FotoDoDia>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0C15',
    alignItems: 'center',
  },
  fotoDoDia: {
    marginTop: 12,
  flexDirection: 'row',
  flexWrap: 'wrap', 
  justifyContent: 'center',
  width: '100%',
  }
});
