import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';

const API_KEY = '6aefccb0ee35ee710247c45ed7cbd503'; // Replace with your OpenWeather API key

const HomeScreen = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    setLoading(true);
    setError('');
    setWeather(null); // Clear previous weather data
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      setWeather(response.data);
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message}`);
      } else {
        setError('City not found or there was an issue fetching data');
      }
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={fetchWeather} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.error}>{error}</Text> : <WeatherDisplay weather={weather} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default HomeScreen;

