import React from 'react';
import CheckBox from 'react-native-checkbox';
import styles from './styles'

const CheckBox = (label, checkCategory) => (
    <CheckBox
        label={label}
        labelStyle={styles.labelstyle}
        checkboxStyle={styles.checkbox}
        checked={checkCategory}
        onChange={(checked) => { }}
    />
)

export default CheckBox;