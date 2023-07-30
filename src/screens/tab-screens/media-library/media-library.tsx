import React, {FC, useState} from 'react';
import {Dimensions, FlatList, Pressable, StyleSheet} from 'react-native';
import {
  Background,
  _Screen,
  _Text,
  _View,
  _VectorIcons,
} from '../../../components';
import {Color} from '../../../const';
import {Fonts} from '../../../const/theme';

export const MediaLibrary: FC = () => {
  const Header = () => {
    return (
      <_View style={styles.headerContainer}>
        <_VectorIcons
          type={'MaterialIcons'}
          name={'chevron-left'}
          size={35}
          color={Color.black}
        />
        <_View style={styles.titleContainer}>
          <_Text style={styles.movieName}>The King's Man</_Text>
          <_Text style={styles.titleDetail}>
            In Theaters December 22, 2021
          </_Text>
        </_View>
      </_View>
    );
  };

  interface SingleBookingCardInterfce {
    index: number;
    selectedCard: number;
    setSelectedCard: (value: number) => void;
  }

  const SingleBookingCard: FC<SingleBookingCardInterfce> = ({
    index,
    selectedCard,
    setSelectedCard,
  }) => {
    console.log(selectedCard, index);

    return (
      <Pressable
        onPress={() => setSelectedCard(index)}
        style={styles.signleBookingCardContainer}>
        <_View style={styles.singleBookingCardTitleContainer}>
          <_Text style={styles.titleTimeTxt}>12:30</_Text>
          <_Text style={styles.titleTxt}>Cinetech + Hall 1</_Text>
        </_View>
        <_View
          style={[
            styles.singleBookingCardChart,
            selectedCard == index && styles.selectedSingleBookingCardChart,
            selectedCard == index && styles.shadow,
          ]}
        />
        <_View style={styles.singleBookingCardPriceContainer}>
          <_Text style={styles.singleBookingCardLabel}>
            From
            <_Text style={styles.singleBookingCardValue}>{' 50$ '}</_Text>
            or
            <_Text style={styles.singleBookingCardValue}>{' 2500 bonus'}</_Text>
          </_Text>
        </_View>
      </Pressable>
    );
  };

  interface RenderDataItemInterfac {
    item: string;
    selectedDate: string;
    setSelectedDate: (value: string) => void;
  }

  const RenderDataItem: FC<RenderDataItemInterfac> = ({
    item,
    setSelectedDate,
    selectedDate,
  }) => {
    return (
      <Pressable
        onPress={() => setSelectedDate(item)}
        style={[
          {
            width: 70,
            height: 30,
            backgroundColor:
              selectedDate === item ? Color.Secondary : Color.Gray + 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
          },
          selectedDate === item && styles.shadow,
        ]}>
        <_Text
          style={{
            fontSize: 14,
            fontFamily: Fonts.bold,
            color: selectedDate === item ? Color.White : Color.black,
          }}>
          {item}
        </_Text>
      </Pressable>
    );
  };

  const BookingUI = () => {
    const dates = [
      '5 Mar',
      '6 Mar',
      '7 Mar',
      '8 Mar',
      '9 Mar',
      '10 Mar',
      '11 Mar',
    ];
    const [selectedDate, setSelectedData] = useState('');

    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardSelection = (index: number) => {
      setSelectedCard(index);
    };

    return (
      <_View style={styles.bookingContainer}>
        <_Text style={styles.dateTitle}>Date</_Text>
        <_View style={styles.availableDatesContainer}>
          <FlatList
            data={dates}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <RenderDataItem
                item={item}
                setSelectedDate={setSelectedData}
                selectedDate={selectedDate}
              />
            )}
          />
        </_View>

        <FlatList
          data={dates}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleBookingCard
              index={index}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          )}
        />
      </_View>
    );
  };

  return (
    <_Screen background={<Background color={Color.White} />} hideTopSafeArea>
      {/* <_View flex={1} paddings={{padding: 20}}>
        <_Text color={Color.Primary} size={'lrg'} font={'Poppins-Bold'}>
          Media Screen
        </_Text>
      </_View> */}

      <Header />
      <BookingUI />
    </_Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.White,
  },
  titleContainer: {
    width: '90%',
    alignItems: 'center',
  },
  movieName: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  titleDetail: {
    fontSize: 13,
    color: Color.Secondary,
  },

  ///Booking
  bookingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.Gray + 30,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 100,
  },
  dateTitle: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  availableDatesContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: Color.Secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  //singleCard
  signleBookingCardContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    height: '45%',
    justifyContent: 'center',
  },
  singleBookingCardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleTimeTxt: {
    fontSize: 13,
    color: Color.black,
    fontFamily: Fonts.medium,
    marginRight: 10,
  },
  titleTxt: {
    fontSize: 13,
    color: Color.Gray,
  },
  singleBookingCardChart: {
    width: 300,
    height: 170,
    backgroundColor: Color.White,
    borderRadius: 10,
    borderColor: Color.Gray,
    borderWidth: 1,
  },
  selectedSingleBookingCardChart: {
    borderColor: Color.Secondary,
    borderWidth: 1,
  },

  singleBookingCardPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleBookingCardLabel: {
    fontSize: 13,
    color: Color.Gray,
    fontFamily: Fonts.medium,
    marginRight: 10,
  },
  singleBookingCardValue: {fontSize: 14, fontFamily: Fonts.bold},
});
