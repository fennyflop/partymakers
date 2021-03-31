import './QueryInput.css';
import queryIcon from '../../images/queryIcon.svg';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
import { useState, useRef, useEffect } from 'react';

const QueryInput = () => {

    const searchRef = useRef(null);
    const [queryText, setQueryText] = useState('');

    function handleQueryChange(evt) {
        setQueryText(evt.target.value);
    }

    function handleSearchQuery(evt) {
        evt.preventDefault();
        searchRef.current.search(queryText)
            .then(() => {
                const geoResultsArray = searchRef.current.getResultsArray();
                if (geoResultsArray.length) return geoResultsArray.map((e) => { return e.properties._data.description; });
                return Promise.reject("Ошибка")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleQueryClear() {
        setQueryText('');
    }

    function onResultsLoad(evt) {
        console.log(evt);
    }

    return (
        <>
            <main className="query">
                <form className="query__form" onSubmit={handleSearchQuery}>
                    <img className="query__icon" src={queryIcon} alt="queryIcon" draggable="false" />
                    <input
                        className="query__input"
                        autoComplete="off"
                        required
                        name="query"
                        type="text"
                        placeholder="Поиск туссовки"
                        onChange={handleQueryChange}
                        value={queryText}
                    />
                    <button className="query__button query__search" type="submit"></button>
                    <button className="query__button query__clear" onClick={handleQueryClear} type="reset"></button>
                </form>
                <ul className="query__results">
                    <li className="query__result">Очень длинный адресс на улице.</li>
                    <li className="query__result">Очень длинный адресс на улице.</li>
                    <li className="query__result">Очень длинный адресс на улице.</li>
                    <li className="query__result">Очень длинный адресс на улице олег. Очень длинный адресс на улице олег. Очень длинный адресс на улице олег</li>
                </ul>
            </main>
            <YMaps query={{ apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    width={'100%'}
                    height={'500px'}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                    }}
                    controls='geolocationControl'
                >
                    <SearchControl
                        instanceRef={ref => {
                            if (ref) searchRef.current = ref;
                        }}
                        option={{
                            noPopup: false,
                            zoomMargin: 15,
                        }}
                        onLoad={onResultsLoad}
                    />
                </Map>
            </YMaps>
        </>
    );
}

export default QueryInput;