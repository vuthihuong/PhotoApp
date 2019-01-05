import React from 'react';
import { TouchableOpacity, Text
} from 'react-native';
import styles from './styles'

const Button = (text) => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>{text}</Text>
    </TouchableOpacity>
)

export default Button;