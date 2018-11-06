import React, { Component } from 'react';
import { View, StatusBar, TextInput, Animated } from 'react-native';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };
//   componentWillMount() {
//     this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
//   }
  

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

//   componentDidUpdate() {
//     Animated.timing(this._animatedIsFocused, {
//       toValue: this.state.isFocused ? 1 : 0,
//       duration: 200,
//     }).start();
//   }
componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }
  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    return (
      <View style={{ paddingTop: 5 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{fontSize: 14, color: '#000',  }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}