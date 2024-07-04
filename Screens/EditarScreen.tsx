import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { ref, onValue, remove, update } from "firebase/database";
import { db } from '../config/Config';
import Card from '../Components/Informacion';
import { TextInput } from 'react-native-gesture-handler';

const EditarScreen = ({ navigation}:any) => {
  const [mascotas, setmascotas] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [id, setid] = useState("");
  const [nombre, setnombre] = useState("");
  const [carnet, setcarnet] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [edicion, setedicion] = useState(false);

  useEffect(() => {
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datatemp = Object.keys(data).map(key => ({ key, ...data[key] }));
        setmascotas(datatemp);
      }
    });
  }, []);


  function editar() {
    update(ref(db, 'users/' + id), {
      username: nombre,
      carnet: carnet,
      description: descripcion
    });
    alert("Editado exitosamente");
    setid("");
    setnombre("");
    setcarnet("");
    setdescripcion("");
    setedicion(false);
  }

  function mensaje(){
    Alert.alert("Info", "Mascota doméstica")
  }

  function editarMascota(item) {
    navigation.navigate('EditarMascota', { mascota: item });
  }

  function eliminarMascota(id) {
    remove(ref(db, 'users/' + id));
    alert("Información eliminada exitosamente");
  }

  const filtrarMascotas = (text) => {
    setFiltro(text.toLowerCase());
    if (text.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todas las mascotas
      const starCountRef = ref(db, 'users/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const datatemp = Object.keys(data).map(key => ({ key, ...data[key] }));
          setmascotas(datatemp);
        }
      });
    } else {
      // Filtrar las mascotas según el término de búsqueda
      const filteredMascotas = mascotas.filter(mascota =>
        Object.values(mascota).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(text.toLowerCase())
        )
      );
      setmascotas(filteredMascotas);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Editar o Eliminar</Text>

      <TextInput
        style={styles.input}
        placeholder='Ingresar ID'
        onChangeText={(texto) => setid(texto)}
        keyboardType='numeric'
        value={id}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingresar nombre'
        onChangeText={(texto) => setnombre(texto)}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingresar carnet'
        onChangeText={(texto) => setcarnet(texto)}
        keyboardType='numeric'
        value={carnet}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingresar descripción'
        onChangeText={(texto) => setdescripcion(texto)}
        multiline
        value={descripcion}
      />
      <Button
        title={'Editar'}
        onPress={editar}
      />
      <FlatList
        data={mascotas}
        renderItem={({ item }) =>
          <View>
            <Card usuario={item} />
            <View style={styles.buttons}>
              <Button
                title='Borrar'
                color={'red'}
                onPress={() => eliminarMascota(item.key)}
              />
            </View>
          </View>
        }
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFF'
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10
  },
  input:{
    backgroundColor: "#666",
    height: 55,
    width: "80%",
    marginBottom: 15,
    borderRadius:40,
    paddingHorizontal: 25,
    fontSize: 30,
    color: 'white'
  },
  btn:{
    margin:20,
    borderRadius:20
  }
});

export default EditarScreen;
