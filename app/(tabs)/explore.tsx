import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <MaterialIcons name="energy-savings-leaf" size={310} color="#808080" style={styles.headerImage} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">⚡ Explore</ThemedText>
      </ThemedView>
      <ThemedText>Charge up your journey with ease. Explore stations tailored for your needs.</ThemedText>
      <Collapsible title="Fast Chargers">
        <ThemedText>
          Get back on the road in minutes.
        </ThemedText>
        <ExternalLink href="https://afdc.energy.gov/fuels/electricity-stations">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Public Charging Spots">
        <ThemedText>
          Convenient locations near you.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Connector Type">
        <ThemedText>
          Compatible with Type 1, Type 2, CCS, or CHAdeMO.
        </ThemedText>
        <ExternalLink href="https://afdc.energy.gov/fuels/electricity-stations">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Top-rated Stations">
        <ThemedText>
          User-recommended locations for reliability.
        </ThemedText>
        <ExternalLink href="https://afdc.energy.gov/fuels/electricity-stations">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#34A853',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
