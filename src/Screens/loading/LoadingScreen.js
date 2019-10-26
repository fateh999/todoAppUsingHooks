import React, { useMemo } from 'react';
import { Container } from '../../Components';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Theme from '../../Config/Theme';

function LoadingScreen() {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Theme.dark
        }
      }),
    []
  );

  return (
    <Container style={styles.containerStyle}>
      <ActivityIndicator
        color={Theme.primary}
        size={'large'}
      ></ActivityIndicator>
    </Container>
  );
}

export default LoadingScreen;
