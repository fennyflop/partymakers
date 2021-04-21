import { useState } from 'react';
import './DatePicker.css';

const DatePicker = ({selectDate, displayed, dateValue}) => {

    function handleDateSelect(evt) {
        selectDate(evt.target.value);
    }

    return (
        <fieldset className="slidebar-fieldset date-picker">
            <input className="date-picker__input" type="date"
            min={new Date().toISOString().slice(0,10)}
            onChange={handleDateSelect}
            // required={displayed ? false : true}
            value={displayed ? dateValue : new Date().toISOString().slice(0,10)}
            readOnly={displayed}
            name="date"
            />
        </fieldset>
    );
}

export default DatePicker;