import { PropTypes, StyleSheet, View, Text } from 'react-native';

export default React => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });

  const <%= module %> = (props, context) => {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <%= module %> component
        </Text>
      </View>
    );

  };

  <%= module %>.propTypes = {

  };

  return <%= module %>;

};
