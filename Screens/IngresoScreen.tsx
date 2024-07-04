import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { ref, set, update } from "firebase/database";
import { db } from '../config/Config';

const IngresoScreen = ({ navigation}:any) => {
  const [id, setid] = useState("");
  const [nombre, setnombre] = useState("");
  const [carnet, setcarnet] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [edicion, setedicion] = useState(false);

  function guardarMascota() {
    if (edicion) {
      editar();
    } else {
      set(ref(db, 'users/' + id), {
        username: nombre,
        carnet: carnet,
        description: descripcion
      });
      alert("Información guardada");
      setid("");
      setnombre("");
      setcarnet("");
      setdescripcion("");
      setedicion(false);
    }
  }

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

  return (
    <ImageBackground
    source={{ uri: "https://img.freepik.com/vector-gratis/veterinaria-perro_1196-293.jpg" }}
    style={styles.container}
    >
      <Text style={styles.txt}>Ingresar Mascotas</Text>
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
        title={edicion ? 'Editar' : 'Guardar'}
        onPress={guardarMascota}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 50,
    width: "70%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    marginVertical: 10
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default IngresoScreen;
