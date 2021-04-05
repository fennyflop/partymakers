import { useEffect, useState } from 'react';
import './SlidebarFieldset.css'

const SlidebarFieldset = ({ label, name, type, min, handleChange, value, error, isRequired }) => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (value) setIsActive(true);
    }, [value])

    return (
        <>
            <fieldset className={`slidebar-fieldset ${error && 'slidebar-fieldset__input-error'}`}>
                <input
                    type={type || 'text'}
                    name={name}
                    min={min}
                    value={value || ''}
                    className="slidebar-fieldset__input"
                    onChange={handleChange}
                    autoComplete="off"
                    required={isRequired}
                />
                <label className={`slidebar-fieldset__label slidebar-fieldset__label-time ${isActive && "slidebar-fieldset__label-active"}`} htmlFor={name} >
                    {label}
                </label>
            </fieldset>
            <p className="slidebar-fieldset__error-message">{error}</p>
        </>
    )
}

export default SlidebarFieldset;