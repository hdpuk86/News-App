import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { services } from '../services/services';

export default function All() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('general')
      .then(data => {
        setNewsData(data)
      })
      .catch(error => {
        alert(error)
      })
  }, []);

  return (
    <View>

    </View>
  );
}
