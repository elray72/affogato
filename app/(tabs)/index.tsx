import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View>
      <Text>Explore</Text>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/bookings">Bookings</Link>
      <Link href="/listing/001">Property 001</Link>
    </View>
  );
};

export default Index;
