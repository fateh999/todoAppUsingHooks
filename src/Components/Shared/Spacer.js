import React from 'react';
import {View, StyleSheet} from 'react-native';

function Spacer({horizontal, size}) {
  const styles = StyleSheet.create({
    spacerStyle: {
      [horizontal ? 'width' : 'height']: size,
    },
  });

  return <View style={styles.spacerStyle}></View>;
}

export default Spacer;
