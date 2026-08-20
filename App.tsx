import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ height:50, width:50, backgroundColor:'red'}}>
      </View>
      <View style={{ height}}
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1130f27',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'pink'
  },
});
