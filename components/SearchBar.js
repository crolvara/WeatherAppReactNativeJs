import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={() => onSearch(city)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
