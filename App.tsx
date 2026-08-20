import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{backgroundColor:'red', flex:1}}>
      </View>
      <View style={{backgroundColor:'blue', flex:2}}>
      </View>      
      <View style={{backgroundColor:'purple', flex:3}}>
      </View>
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
