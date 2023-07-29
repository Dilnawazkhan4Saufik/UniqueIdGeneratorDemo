import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
interface MovieListInterface {
  title: string;
  backgroundPic: string;
}

const MovieList: FC<MovieListInterface> = ({title, backgroundPic}) => {
  return (
    <View style={styles.container}>
      <Text>MovieList</Text>
    </View>
  );
};

export {MovieList};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: Color.Gray + 30,
  },
});
