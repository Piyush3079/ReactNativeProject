import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './src/Authenticate/Login';
import TabNavigator from './src/Navigation';
import Header from './src/Header/Header';
import AppDrawerNavigator from './src/DrawerNavigator';

// export default function App() {
//   return (
//     <View style={styles.container}>
//     {/* <TabNavigator /> */}
//     <AppDrawerNavigator>
//       <Header />
//     </AppDrawerNavigator>
//     </View>
//   );
// }
export default AppDrawerNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
