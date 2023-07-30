import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
import {_VectorIcons} from '../../../../components';
import FastImage from 'react-native-fast-image';
import {Fonts} from '../../../../const/theme';
interface MovieListInterface {
  title: string;
  backgroundPic: string;
}

const MovieList: FC<MovieListInterface> = ({title, backgroundPic}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: backgroundPic}} style={styles.img} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Fantasy</Text>
      </View>

      <_VectorIcons
        type="MaterialCommunityIcons"
        name="dots-horizontal"
        size={24}
        color={Color.Secondary}
      />
    </View>
  );
};

export {MovieList};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Gray + 30,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  img: {
    width: '45%',
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  detailContainer: {
    justifyContent: 'flex-start',
    width: '45%',
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: Fonts.regular,
  },
  category: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Color.TextLight,
    marginTop: 5,
  },
});
