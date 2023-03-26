import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import {CardKontak} from '../../components';

const Home = ({navigation}) => {
  const [kontaks, setKontaks] = useState({});
  const [kontaksKey, setKontaksKey] = useState([]);

  const getData = () => {
    FIREBASE.database()
      .ref('contacts')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        setKontaks(kontakItem);
        setKontaksKey(Object.keys(kontakItem));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removeData = id => {
    Alert.alert('Info', 'Apakah anda yakin akan menghapus kontak?', [
      {
        text: 'TIDAK',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'YA',
        onPress: () => {
          FIREBASE.database()
            .ref('contacts/' + id)
            .remove();
          getData();
          Alert.alert('Sukses', 'Berhasil hapus kontak');
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Daftar Kontak</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.listKontak}>
        {kontaksKey.length > 0 ? (
          kontaksKey.map(key => (
            <CardKontak
              key={key}
              kontaks={kontaks[key]}
              id={key}
              navigation={navigation}
              removeData={removeData}
            />
          ))
        ) : (
          <Text>Daftar Kontak Kosong</Text>
        )}
      </View>

      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => navigation.navigate('Tambah Kontak')}>
          <FontAwesomeIcon icon={faPlus} size="20" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },
  listKontak: {
    paddingHorizontal: 20,
  },
  line: {
    borderWidth: 1,
    marginVertical: 10,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
