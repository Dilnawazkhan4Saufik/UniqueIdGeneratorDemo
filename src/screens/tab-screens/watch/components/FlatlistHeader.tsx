import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';

interface FlatlistHeaderInterface {
  isSearchEnabled: boolean;
  searchQuery: string;
}

const FlatlistHeader: FC<FlatlistHeaderInterface> = ({
  isSearchEnabled,
  searchQuery,
}) => {
  return isSearchEnabled && searchQuery.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.txt}>Top Results</Text>
    </View>
  ) : null;
};

export {FlatlistHeader};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBlockColor: Color.black,
    backgroundColor: Color.Gray + 30,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  txt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});
