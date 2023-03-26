import {StyleSheet, TouchableOpacity, View, Text, Alert} from 'react-native';
import React, {Component} from 'react';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorHP: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.nama && this.state.nomorHP && this.state.alamat) {
      const kontakReferensi = FIREBASE.database().ref('contacts');
      const kontak = {
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        alamat: this.state.alamat,
      };

      kontakReferensi
        .push(kontak)
        .then(() => {
          Alert.alert('Sukses', 'Berhasil menyimpan kontak');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('error insert contact: ', error.message);
        });
    } else {
      Alert.alert('Error', 'Semua form wajib diisi');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <InputData
          formLabel="Nama"
          placeholder="Masukkan Nama"
          value={this.state.nama}
          onChangeText={this.onChangeText}
          namaState="nama"
        />
        <InputData
          formLabel="No. HP"
          placeholder="Masukkan No. HP"
          keyboardType="numeric"
          value={this.state.nomorHP}
          onChangeText={this.onChangeText}
          namaState="nomorHP"
        />
        <InputData
          formLabel="Alamat"
          placeholder="Masukkan Alamat"
          isTextArea={true}
          value={this.state.alamat}
          onChangeText={this.onChangeText}
          namaState="alamat"
        />
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => this.onSubmit()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnSubmit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
  },
});
