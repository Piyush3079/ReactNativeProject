import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './src/Login';
import TabNavigator from './src/Navigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <TabNavigator />
//       {/* <Login /> */}
//     </View>
//   );
// }
export default TabNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
