import { YMaps, Map, SearchControl } from 'react-yandex-maps';
import { useState, useRef } from 'react';
import Query from '../Query/Query';
import SlideBar from '../SlideBar/SlideBar';
import SlidebarInfo from '../SlidebarInfo/SlidebarInfo';
import SlidebarTime from '../SlidebarTime/SlidebarTime';
import SlidebarFooter from '../SlidebarFooter/SlidebarFooter';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';
import { useFormWithValidation } from '../../utils/useForm';

const PartyMaker = () => {
    const searchRef = useRef(null);

    const [resultShow, setResultShow] = useState();
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

    return (
        <>
            <SlideBar slidebarDisplayed={slidebarDisplayed} toggleSlidebar={toggleSlidebar}>
                <Query displayInfo={true} handleDisplayPlace={handleDisplayPlace} searchRef={searchRef} result={resultShow} />
                <form className="query__party-form">
                    <SlidebarInfo placeData={selectedPlaceData} error={errors.hours} />
                    <SlidebarTime handleChange={handleChange} hours={values.hours} minutes={values.minutes} />
                    <p className="slidebar-fieldset__error-message">{errors.hours}</p>
                    <p className="slidebar-fieldset__error-message">{errors.minutes}</p>
                    <SlidebarFieldset handleChange={handleChange} value={values.partyTitle} name='partyTitle' label="Название тусы 👀" type="text" error={errors.partyTitle} isRequired={true} />
                    <SlidebarFieldset handleChange={handleChange} value={values.minAge} name='minAge' label="Входной возраст 🤪" type="number" min={0} max={150} error={errors.minAge} isRequired={true} />
                    <SlidebarFieldset handleChange={handleChange} value={values.cost} name='cost' label="Стоимость RUB 🤑" type="number" min={0} error={errors.cost} isRequired={false} />
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