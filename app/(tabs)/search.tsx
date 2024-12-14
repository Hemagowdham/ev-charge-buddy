import { TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function Login() {

    const [area, setArea] = useState("");
    const [city, setCity] = useState("");

    const handleSearch = () => {
        
    };

    return (
      <ThemedView>
        {/* App Logo */}
        <Image
          source={require('@/assets/images/Logo-light.png')} // Replace with your logo
          style={styles.logo}
        />

      {/* App Heading */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Search Nearby EV Charge Bunks</ThemedText>
      </ThemedView>

      {/* App Description */}
      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          Enter your current location <ThemedText type="defaultSemiBold">"Area"</ThemedText> and <ThemedText type="defaultSemiBold">"City"</ThemedText> 
        </ThemedText>
      </ThemedView>

      {/* Login credentials */}
      <TextInput
        style={styles.input}
        placeholder="Area"
        onChangeText={text => setArea(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={text => setCity(text)}
      />

      <TouchableOpacity onPress={handleSearch}>
        <ThemedText style={styles.button}>
          Search
        </ThemedText>
      </TouchableOpacity>
      
      <ThemedText>{area}</ThemedText>
      <ThemedText>{city}</ThemedText>
      
    </ThemedView>
    );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 5,
    width: 400,
    height: 120,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginStart: 20,
    marginBottom: 20,
  },
  descriptionContainer: {
    gap: 8,
    marginBottom: 8,
    marginStart: 20,
    marginEnd: 20,
  },
  input: {
    height: 40, 
    padding: 5, 
    borderWidth: 2, 
    borderColor: 'grey', 
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 4,
  },
  button: {
    fontSize: 16,
    backgroundColor: '#34A853',
    borderRadius: 40,
    width: 240,
    padding: 20,
    marginTop: 40,
    marginBottom: 40,
    marginStart: 20,
    fontWeight: 600,
    textAlign: 'center',
  }
});
