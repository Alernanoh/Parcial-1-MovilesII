import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Definición de la interfaz para la película
interface Pelicula {
  titulo: string;
  image: string;
  anio: number;
  descripcion: string;
}

export default function ApiScreen() {
  const API_ITSQMET = "https://jritsqmet.github.io/web-api/peliculas2.json";
  const [data, setData] = useState<{ peliculas: Pelicula[] }>({ peliculas: [] });

  useEffect(() => {
    fetch(API_ITSQMET)
      .then(response => response.json())
      .then(data => {
        setData(data); 
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  function mensaje(item: Pelicula) {
    Alert.alert("Descripción", "Acerca de esto: " + item.descripcion);
  }

  if (data.peliculas.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>ITSQMET</Text>
      <FlatList
        data={data.peliculas}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.btn} onPress={() => mensaje(item)}>
            <Text style={styles.text_title}>Nombre:</Text>
            <Text style={styles.text}>{item.titulo}</Text>
            <Text style={styles.text_title}>Imagen:</Text>
            <Image style={styles.img} source={{ uri: item.image }} />
            <Text style={styles.text_title}>Año:</Text>
            <Text style={styles.text}>{item.anio}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  text_title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  img: {
    width: "70%",
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
