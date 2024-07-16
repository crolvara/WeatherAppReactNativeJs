import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const WeatherDisplay = ({ weather }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (weather) {
      opacity.value = withTiming(1, { duration: 1000 });
    }
  }, [weather]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  if (!weather) return null;

  const celsius = weather.main.temp;
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.temp}>Celsius: {celsius.toFixed(2)}°C</Text>
      <Text style={styles.temp}>Fahrenheit: {fahrenheit.toFixed(2)}°F</Text>
      <Text style={styles.temp}>Kelvin: {kelvin.toFixed(2)}K</Text>
    </Animated.View>
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

