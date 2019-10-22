import React from 'react';
import {View, StyleSheet} from 'react-native';

function Container({children, style}) {
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      ...style,
    },
  });

  return <View style={styles.containerStyle}>{children}</View>;
}

export default Container;
