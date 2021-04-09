import { useEffect, useState } from 'react';
import './SlidebarFieldset.css'

const SlidebarFieldset = ({ label, name, type, min, handleChange, value, error, isRequired, max, displayed }) => {

    const [isActive, setIsActive] = useState(displayed ? true : false);

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
                    max={max}
                    value={value || ''}
                    className="slidebar-fieldset__input"
                    onChange={handleChange}
                    autoComplete="off"
                    required={isRequired}
                    disabled={displayed}
                />
                <label className={`slidebar-fieldset__label slidebar-fieldset__label-time ${(isActive && value) && "slidebar-fieldset__label-active"}`} htmlFor={name} >
                    {label}
                </label>
            </fieldset>
            <p className={`slidebar-fieldset__error-message ${displayed && 'slidebar-fieldset__error-message-hidden'}`}>{error}</p>
        </>
    )
}

export default SlidebarFieldset;