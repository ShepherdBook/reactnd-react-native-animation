import React from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

// decay - initial velocity and slow to a stop
// spring - spring physics model
// timing - animated a value over time

export default class App extends React.Component {
  state ={
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start()
  }

  render() {
    const { opacity } = this.state

    return (
      <View style={styles.container}>
        <Animated.Image 
          style={[styles.img, { opacity }]}
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200
  }
});
