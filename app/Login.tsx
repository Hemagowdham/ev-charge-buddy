import { TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function Login() {

    const [usermail, setUsermail] = useState("");
    const [userpassword, setuserpassword] = useState("");

    const handleLogin = () => {

    };

    return (
      <ThemedView>
        {/* App Logo */}
        <Image
          source={require('@/assets/images/Logo-light.png')} // Replace with your logo
          style={styles.logo}
        />

      {/* Hero Image */}
      <Image
        source={require('@/assets/images/bg.jpg')} // Replace with your hero image
        style={styles.heroImage}
      />

      {/* App Heading */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">EV Charging Station Locator App</ThemedText>
      </ThemedView>

      {/* App Description */}
      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          Welcome to <ThemedText type="defaultSemiBold">EV Charge Buddy</ThemedText>, I'm your companion for finding nearby electric vehicle charging stations quickly and effortlessly. 
        </ThemedText>
      </ThemedView>

      {/* Login credentials */}
      <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Email"
        onChangeText={text => setUsermail(text)}
        defaultValue={usermail}
      />

      <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Password"
        onChangeText={text => setuserpassword(text)}
        secureTextEntry
        defaultValue={userpassword}
      />

      <TouchableOpacity onPress={handleLogin}>
        <ThemedText style={styles.button}>
          Login with Google
        </ThemedText>
      </TouchableOpacity>
      
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
