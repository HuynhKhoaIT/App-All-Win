// IntroductionScreen.js

import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const IntroductionScreen = ({ navigation }) => {
  useEffect(() => {
    // Chờ 10 giây trước khi chuyển sang trang HomePage
    const timer = setTimeout(() => {
      navigation.replace('HomePage');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View>
      <Text>Giới thiệu bản thân</Text>
      <Text>Nguyễn Huỳnh Khoa</Text>
      <Text>Mssv: 20220662</Text>
    </View>
  );
};

export default IntroductionScreen;
