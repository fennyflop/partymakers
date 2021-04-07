import './SlidebarTime.css';
import { useEffect, useState, useMemo } from 'react';

const SlidebarTime = () => {

    const [isActive, setIsActive] = useState(false);

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();

    function handleHours(evt) {
        setHours(evt.target.value);
    }

    function handleMinutes(evt) {
        setMinutes(evt.target.value);
    }

    function valueChecker(hours, minutes) {
        const values = [(+hours > 23 ? 23 : +hours), ((+minutes > 59 ? 59 : +minutes))];
        console.log(values);
        return values;
    }

    const dateValue = useMemo(() => valueChecker(hours, minutes), [hours, minutes]);

    useEffect(() => {
        if (hours || minutes) return setIsActive(true);
        setIsActive(false);
    }, [hours, minutes])

    return (
        <>
            <fieldset className="slidebar-time">
                <input
                    type="number"
                    name="hours"
                    min={0}
                    max={23}
                    maxLength="2"
                    value={dateValue[0].toString()}
                    className="slidebar-fieldset__input-time"
                    onChange={handleHours}
                    autoComplete="off"
                />
                <input
                    min={0}
                    max={59}
                    type="number"
                    name="minutes"
                    value={dateValue[1].toString().length < 2 ? "0" + dateValue[1].toString() : dateValue[1].toString()}
                    className="slidebar-fieldset__input-time"
                    onChange={handleMinutes}
                    autoComplete="off"
                />
                <label className={`slidebar-fieldset__label ${isActive && "slidebar-fieldset__label-time-active"}`} htmlFor="time" >
                    Выбранное время 🕓
                </label>
            </fieldset>
        </>
    );
}

export default SlidebarTime;