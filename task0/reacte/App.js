import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import styles from './styles';
import { useState } from 'react';
import { Button } from 'react-native-web';
import React from 'react';
import LoginScreen from './loginscreen';

export default function App() {
  return <LoginScreen />;
}
// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>btn {count}</Text>
//       <View style={styles.box}>
//         <Button styl={styles.btn}
//           title='ыыы'
//           onPress={() => setCount(count + 1)}
//         />
//         <Button styl={styles.btn}
//           title='qqq'
//           onPress={() => setCount(count - 1)}
//         />
//       </View>
//     </View>
//   );
// }
