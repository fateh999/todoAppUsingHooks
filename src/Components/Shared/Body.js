import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

function Body({children, style}) {
  const styles = StyleSheet.create({
    bodyStyle: {
      flexGrow: 1,
      ...style,
    },
  });

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.bodyStyle}>
      {children}
    </ScrollView>
  );
}

export default Body;
