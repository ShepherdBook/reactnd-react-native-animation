import React from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

// decay - initial velocity and slow to a stop
// spring - spring physics model
// timing - animated a value over time

export default class App extends React.Component {
  state ={
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start()

    Animated.timing(width, { toValue: 300, speed: 5})
      .start()

    Animated.timing(height, { toValue: 300, speed: 5})
      .start()
  }

  render() {
    const { opacity, width, height } = this.state

    return (
      <View style={styles.container}>
        <Animated.Image 
          style={[styles.img, { opacity, width, height }]}
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
