import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles'

const Dropdown = (data) => (
    <View style={styles.dropdown}>
        <Dropdown
            data={data}
            value={this.state.addressEvent}
            onChangeText={(addressEvent) => {}} />
    </View>
)

export default Dropdown;