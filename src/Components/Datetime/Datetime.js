import React from 'react';
import DatePicker from 'react-native-datepicker'
import styles from './styles'

const Datetime = (checkDate) => (
    <DatePicker
        style={styles.customeDate}
        date={checkDate}
        mode="datetime"
        placeholder="Ngày - giờ"
        format="YYYY-MM-DD HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
            dateInput: styles.datetime
        }}
        onDateChange={(datetimeEvent) => {}}
    />
)

export default Datetime;