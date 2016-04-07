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

  const Welcome = ({ platform }, context) => {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Platform: {platform}
        </Text>
      </View>
    );

  };

  Welcome.propTypes = {
    platform: PropTypes.string.isRequired
  };

  return Welcome;

};
