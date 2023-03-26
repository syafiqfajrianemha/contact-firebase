import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const CardKontak = ({id, kontaks, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail Kontak', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontaks.nama}</Text>
        <Text style={styles.noHp}>No. HP : {kontaks.nomorHP}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit Kontak', {id: id})}>
          <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeData(id)}>
          <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nama: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  noHp: {
    fontSize: 14,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    gap: 10,
  },
});
