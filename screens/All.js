import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import moment from 'moment';

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
    <NativeBaseProvider>
      <FlatList
        keyExtractor={(item) => item.title.trim()}
        data={newsData}
        renderItem={({ item }) => (
          <View>
            <View style={styles.newsContainer}>
              <Image
                width={550}
                height={250}
                resizeMode={"cover"}
                source={{
                  uri: item.urlToImage,
                }}
                alt={item.title}
              />
              <Text style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.date}>
                {moment(item.publishedAt).format('LLL')}
              </Text>
              <Text style={styles.newsDescription}>
                {item.description}
              </Text>
            </View>

            <Divider my={2} bg="#e0e0e0" />
          </View>
        )}
      />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600"
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10
  },
  date: {
    fontSize: 14
  },
});
