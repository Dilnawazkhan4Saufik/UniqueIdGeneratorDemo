import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {_Text} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
interface CardInterface {
  title: string;
  backgroundPic: string;
}

const Card: FC<CardInterface> = ({title, backgroundPic}) => {
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      source={{uri: backgroundPic}}
      style={styles.img}
      resizeMode="cover">
      <_Text color={Color.White} size={'med'} font={Fonts.regular}>
        {title}
      </_Text>
    </ImageBackground>
  );
};

export {Card};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
  img: {
    width: 180,
    height: 105,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
