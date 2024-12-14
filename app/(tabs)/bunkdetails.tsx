import { TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import Entypo from '@expo/vector-icons/Entypo';

export default function BunkDetails() {
    const evBunksAPI = [
        {
            id: 1,
            name: 'Tucker Charging Station',
            area: 'K. Pudur',
            city: 'Madurai',
            address: 'Melur Main Rd, Industrial Estate, Madurai, K.Pudur, Tamil Nadu 625020',
            mapSource: 'https://maps.app.goo.gl/ucaQpLdk84eHfeNY7'
        },
        {
            id: 2,
            name: 'Zeon Charging Station',
            area: 'Chinna Chokkikulam',
            city: 'Madurai',
            address: 'JC Residency, 14, Lady Doak College Rd, Madurai, Tamil Nadu 625002',
            mapSource: 'https://maps.app.goo.gl/FYgdtKV2rFrdN5g29'
        }
    ];
    return (
      <ThemedView>
        {/* App Logo */}
        <Image
          source={require('@/assets/images/Logo-light.png')} // Replace with your logo
          style={styles.logo}
        />

      {/* App Heading */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">EV Charge Bunks Near you</ThemedText>
      </ThemedView>

      {evBunksAPI.map((bunk) => 
      <ThemedView style={styles.titleContainer}>
        <Collapsible title={bunk.name}>
            <ThemedText>
                <ThemedText style={{ fontFamily: 'SpaceMono' }}>
                    <Entypo name="location-pin" size={24} color="black" />
                    {bunk.address}
                </ThemedText>
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={{paddingBlockEnd: 10}}> ( {bunk.area}, {bunk.city} ) </ThemedText>
            <ExternalLink href={bunk.mapSource}>
                <ThemedText type="link">View Maps</ThemedText>
            </ExternalLink>
        </Collapsible>
    </ThemedView>)}

      
      
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginStart: 20,
    marginBottom: 20,
  },
  collapse: {

  }
});
