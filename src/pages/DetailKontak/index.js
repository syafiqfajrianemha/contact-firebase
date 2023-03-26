import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import FIREBASE from '../../config/FIREBASE';

export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('contacts/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontak: kontakItem,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Nama :</Text>
        <Text style={styles.text}>{this.state.kontak.nama}</Text>
        <Text>No. HP :</Text>
        <Text style={styles.text}>{this.state.kontak.nomorHP}</Text>
        <Text>Alamat :</Text>
        <Text style={styles.text}>{this.state.kontak.alamat}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
