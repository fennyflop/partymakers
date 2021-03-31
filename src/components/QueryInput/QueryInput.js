import './QueryInput.css';
import QueryResult from '../QueryResult/QueryResult';
import queryIcon from '../../images/queryIcon.svg';
import QueryLoading from '../QueryLoading/QueryLoading';
import { YMaps, Map, SearchControl } from 'react-yandex-maps';
import { useState, useRef, useEffect } from 'react';

const QueryInput = () => {

    const searchRef = useRef(null);
    const [isSearching, setIsSearching] = useState(false);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [resultsArray, setResultsArray] = useState([]);
    const [queryText, setQueryText] = useState('');

    function handleQueryChange(evt) {
        setQueryText(evt.target.value);
    }

    function handleQueryClear() {
        setQueryText('');
        setResultsOpen(false)
    }

    function handleSearchQuery(evt) {
        evt.preventDefault();
        if (searchRef.current) return handleSearch();
    }

    function handlePlacePick(placeData) {
        if (searchRef.current) {
            const generatedQuery = placeData.join(", ");
            setQueryText(generatedQuery);
            setResultsOpen(false);
            searchRef.current.search(generatedQuery)
                .then(() => {
                    console.log('done');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    function handleSearch() {
        setIsSearching(true);
        searchRef.current.search(queryText)
            .then(() => {
                const geoResultsArray = searchRef.current.getResultsArray();
                if (geoResultsArray.length) return setResultsArray(geoResultsArray.map((e) => { return [e.properties._data.name, e.properties._data.description]; }));
                return Promise.reject("Ничего не найдено")
            })
            .catch((err) => {
                setResultsArray([]);
            })
            .then(() => {
                setResultsOpen(true);
                setIsSearching(false);
            })
    }

    useEffect(() => {
        // AUTO CLOSE FUNCTION
        // setTimeout(() => {
        //     setResultsOpen(false);
        // }, 10000)
        if (searchRef.current) return handleSearch();
    }, [queryText])

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
                <ul className={`query__results ${resultsOpen && 'query__results-opened'}`}>
                    {
                        isSearching ?
                            <QueryLoading />
                            :
                            resultsArray.length ?
                                resultsArray.map((e, i) => {
                                    return <QueryResult resultData={e} handlePlacePick={handlePlacePick} key={i} />
                                })
                                :
                                <QueryResult resultData={['😔 Ничего не найдено']} />
                    }
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
                    />
                </Map>
            </YMaps>
        </>
    );
}

export default QueryInput;