import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const celsius = weather.main.temp;
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  return (
    <View style={styles.container}>
      <Text style={styles.temp}>Celsius: {celsius.toFixed(2)}°C</Text>
      <Text style={styles.temp}>Fahrenheit: {fahrenheit.toFixed(2)}°F</Text>
      <Text style={styles.temp}>Kelvin: {kelvin.toFixed(2)}K</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  temp: {
    fontSize: 20,
    marginVertical: 5,
  },
});

export default WeatherDisplay;
