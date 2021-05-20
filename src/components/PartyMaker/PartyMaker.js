import { YMaps, Map, SearchControl } from 'react-yandex-maps';
import { useState, useRef } from 'react';
import Query from '../Query/Query';
import SlideBar from '../SlideBar/SlideBar';
import SlidebarInfo from '../SlidebarInfo/SlidebarInfo';
import SlidebarTime from '../SlidebarTime/SlidebarTime';
import SlidebarFooter from '../SlidebarFooter/SlidebarFooter';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';
import DatePicker from '../DatePicker/DatePicker';
import api from '../../utils/api';
import { useFormWithValidation } from '../../utils/useForm';

const PartyMaker = () => {
    const searchRef = useRef(null);

    const [resultShow, setResultShow] = useState();
    const [selectedDate ,setSelectedDate] = useState(Date.now());
    const [selectedPlaceData, setSelectedPlaceData] = useState([]);
    const [slidebarDisplayed, setSlidebarDisplayed] = useState(true);

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function toggleSlidebar() {
        setSlidebarDisplayed(!slidebarDisplayed);
    }

    function handleDisplayPlace(placeData) {
        setSelectedPlaceData(placeData);
    }

    function handleResultShow() {
        setResultShow(resultShow + 1);
    }

    function selectDate(date) {
        setSelectedDate(date);
        console.log(date);
    }

    function createNewParty(evt) {
        evt.preventDefault();
        console.log(selectedPlaceData);
        api.createUserParty(values.partyTitle, "", selectedDate, selectedPlaceData[0], selectedPlaceData[1], selectedPlaceData[2], values.cost, values.minAge)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <SlideBar slidebarDisplayed={slidebarDisplayed} toggleSlidebar={toggleSlidebar}>
                <Query displayInfo={true} handleDisplayPlace={handleDisplayPlace} searchRef={searchRef} result={resultShow} />
                <form className="query__party-form" onSubmit={createNewParty}>
                    <SlidebarFieldset handleChange={handleChange} value={values.partyTitle} name='partyTitle' label="Название тусы 👀" type="text" error={errors.partyTitle} isRequired={true} />
                    <DatePicker selectDate={selectDate} />
                    <SlidebarTime handleChange={handleChange} hours={values.hours} minutes={values.minutes} />
                    <p className="slidebar-fieldset__error-message">{errors.hours}</p>
                    <p className="slidebar-fieldset__error-message">{errors.minutes}</p>
                    <SlidebarFieldset handleChange={handleChange} value={values.minAge} name='minAge' label="Входной возраст 🤪" type="number" min={0} max={150} error={errors.minAge} isRequired={true} />
                    <SlidebarFieldset handleChange={handleChange} value={values.cost} name='cost' label="Стоимость RUB 🤑" type="number" min={0} error={errors.cost} isRequired={false} />
                    <SlidebarInfo placeData={selectedPlaceData} error={errors.hours} />
                    <button className="query__party-submit" disabled={!(isValid && selectedPlaceData.length)}>Создать</button>
                    <SlidebarFooter />
                </form>
            </SlideBar>
            <YMaps query={{ apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    width={'100%'}
                    height={'100vh'}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                    }}
                >
                    <SearchControl
                        onResultShow={handleResultShow}
                        instanceRef={ref => {
                            if (ref) searchRef.current = ref;
                        }}
                        options={{
                            size: 'small',
                            zoomMargin: 9,
                            kind: 'locality',
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
}

export default PartyMaker;