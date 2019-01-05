import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const textInput = (data) => (
    <TextInput multiline={true} numberOfLines={10} underlineColorAndroid='transparent'
        style={styles.txtInput}
        onChangeText={(contentEvent) => this.setState({ contentEvent })}>{this.state.contentEvent}
    </TextInput>
)

export default textInput;