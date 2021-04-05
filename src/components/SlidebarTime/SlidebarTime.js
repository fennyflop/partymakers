import './SlidebarTime.css';
import { useEffect, useRef, useState } from 'react';

const SlidebarTime = ({ handleChange, hours, minutes, error }) => {

    const minuteInput = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (hours || minutes) return setIsActive(true);
        setIsActive(false);
    }, [hours, minutes])

    useEffect(() => {
        if (hours && hours.length > 1 && +hours > 0 && +hours < 24 && minuteInput.current) return minuteInput.current.focus();
    }, [hours]);

    return (
        <>
            <fieldset className="slidebar-time">
                <input
                    type="number"
                    name="hours"
                    min={0}
                    max={23}
                    value={hours || ''}
                    className="slidebar-fieldset__input-time"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <input
                    min={0}
                    max={59}
                    type="number"
                    name="minutes"
                    value={minutes || ''}
                    className="slidebar-fieldset__input-time"
                    onChange={handleChange}
                    autoComplete="off"
                    ref={ref => {
                        if (ref) minuteInput.current = ref;
                    }}
                />
                <label className={`slidebar-fieldset__label-time ${isActive && "slidebar-fieldset__label-time-active"}`} htmlFor="time" >
                    Выбранное время
                </label>
            </fieldset>
        </>
    );
}

export default SlidebarTime;