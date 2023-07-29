import React, {FC, useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Background,
  _Screen,
  _Text,
  _View,
  _VectorIcons,
} from '../../../components';
import {Color} from '../../../const';
import {Fonts} from '../../../const/theme';
import {Card, FlatlistHeader, Header, SearchBar} from './components';

export const Watch: FC = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [numColumns, setNumColumns] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const genres = [
    {
      id: 1,
      name: 'Comedies',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 2,
      name: 'Crime',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 3,
      name: 'Family',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 4,
      name: 'Documentaries',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 5,
      name: 'Dramas',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 6,
      name: 'Fantasy',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 7,
      name: 'Holidays',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 8,
      name: 'Horror',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 9,
      name: 'Sci-Fi',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 10,
      name: 'Thriller',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
  ];

  const handleSearch = () => {
    setNumColumns(2);
    setIsSearchEnabled(true);
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setNumColumns(1);
    setIsSearchEnabled(false);
  };

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
    if (searchQuery.length > 0) {
      setNumColumns(1);
    } else {
      setNumColumns(2);
    }
  };
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      {isSearchEnabled ? (
        <SearchBar
          setSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
          handleCloseSearch={handleCloseSearch}
        />
      ) : (
        <Header handleSearch={handleSearch} />
      )}

      <FlatList
        key={numColumns}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        data={genres}
        renderItem={({item, index}) => (
          <Card
            title={item.name}
            backgroundPic={item.thumbnail}
            isSearchEnabled={isSearchEnabled}
            searchQuery={searchQuery}
          />
        )}
        ListHeaderComponent={
          <FlatlistHeader
            isSearchEnabled={isSearchEnabled}
            searchQuery={searchQuery}
          />
        }
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListFooterComponent={() => <View style={{height: 80}} />}
      />
    </_Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  flatList: {
    paddingVertical: 10,
    backgroundColor: Color.Gray + 30,
    flex: 1,
  },
});
