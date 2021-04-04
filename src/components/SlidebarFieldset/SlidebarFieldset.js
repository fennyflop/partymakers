import { useState } from 'react';
import './SlidebarFieldset.css'

const SlidebarFieldset = ({ label, name }) => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState();

    function handleTextChange(text) {
        setValue(text);
        if (text !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (
        <fieldset className="slidebar-fieldset">
            <input
                type={name}
                value={value}
                className="slidebar-fieldset__input"
                onChange={(e) => handleTextChange(e.target.value)}
            />
            <label className={`slidebar-fieldset__label ${isActive && "slidebar-fieldset__label-active"}`} htmlFor={name} >
                {label}
            </label>
        </fieldset>
    )
}

export default SlidebarFieldset;