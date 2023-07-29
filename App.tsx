// import React from 'react';
// import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import VideoPlayer from 'react-native-video-player';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <VideoPlayer
//         video={{
//           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         }}
//         videoWidth={500}
//         videoHeight={900}
//         thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;

import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
