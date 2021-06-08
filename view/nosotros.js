import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
const Nosotros = ({navigation, route}) => {
  console.log(route);
  const {clientId} = route.params;
  const back = () => {
    navigation.navigate('Inicio');
    // navigation.goBack();
    // navigation.push('Inicio');
  };
  return (
    <View style={styles.contenedor}>
      <Text>{clientId}</Text>
      <Button title="Volver" onPress={() => back()} />
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
export default Nosotros;
