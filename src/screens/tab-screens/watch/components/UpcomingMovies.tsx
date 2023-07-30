import {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {_Text, _View} from '../../../../components';
import {Color, Fonts} from '../../../../const/theme';

interface UpcomingMoviesInterface {
  title: string;
  backgroundPic: string;
}

const UpcomingMovies: FC<UpcomingMoviesInterface> = ({
  title,
  backgroundPic,
}) => {
  return (
    <_View
      justify="center"
      align="center"
      width={'100%'}
      margins={{marginHorizontal: 10, marginTop: 10}}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{uri: backgroundPic}}
        style={styles.img}
        resizeMode="cover">
        <_View style={styles.overlay}>
          <_Text color={Color.White} size={'med'} font={Fonts.regular}>
            {title}
          </_Text>
        </_View>
      </ImageBackground>
    </_View>
  );
};

export {UpcomingMovies};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },

  img: {
    width: '100%',
    height: 180,
    marginHorizontal: 10,
  },
  overlay: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
