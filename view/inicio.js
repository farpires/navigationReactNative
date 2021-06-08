import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
const Inicio = ({navigation}) => {
  const information = {
    clientId: 20,
    TotalPay: 500,
  };

  const toVisitUs = () => {
    navigation.navigate('Nosotros', information);
  };
  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Ir  a  Nosotros " onPress={() => toVisitUs()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inicio;
