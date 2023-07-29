import {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Color, Fonts} from '../../../../const/theme';
import {_Text} from '../../../../components';

interface GenresInterface {
  title: string;
  backgroundPic: string;
}

export const Genres: FC<GenresInterface> = ({title, backgroundPic}) => {
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

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
  img: {
    alignSelf: 'center',
    width: 180,
    height: 105,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
