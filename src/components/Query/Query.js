import './Query.css';
import { YMaps, Map, SearchControl } from 'react-yandex-maps';
import { useState, useRef, useEffect } from 'react';
import SlideBar from '../SlideBar/SlideBar';
import QueryResults from '../QueryResults/QueryResults';
import QueryInput from '../QueryInput/QueryInput';
import SlidebarInfo from '../SlidebarInfo/SlidebarInfo';
import SlidebarFooter from '../SlidebarFooter/SlidebarFooter';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';

const Query = () => {
    const searchRef = useRef(null);

    const [isSearching, setIsSearching] = useState(false);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [resultsArray, setResultsArray] = useState([]);
    const [selectedPlaceData, setSelectedPlaceData] = useState([]);

    const [queryText, setQueryText] = useState('');

    function handleQueryChange(evt) {
        setQueryText(evt.target.value);
    }

    function handleClearQuery() {
        setQueryText('');
        setResultsOpen(false);
    }

    function handlePlacePick(placeData) {
        if (!searchRef.current) return;
        setSelectedPlaceData(placeData);
        const generatedQuery = placeData[1] + ', ' + placeData[2];
        setQueryText(generatedQuery);
    }

    function handleResultShow(evt) {
        console.log(evt);
        setResultsOpen(false);
    }

    function handleSearchQuery(queryText) {
        if (!searchRef.current) return;
        setIsSearching(true); // Start searching
        searchRef.current.search(queryText)
            .then(() => {
                const geoResultsArray = searchRef.current.getResultsArray();
                if (geoResultsArray.length) return setResultsArray(geoResultsArray.map((e) => { return [e.geometry._coordinates, e.properties._data.name, e.properties._data.description]; }));
                return Promise.reject("Ничего не найдено")
            })
            .catch(() => {
                setResultsArray([]);
            }) // finally method doesn't work
            .then(() => {
                setResultsOpen(true);
                setIsSearching(false);
            })
    }

    return (
        <>
            <SlideBar>
                <main className="query">
                    <QueryInput
                        handleCloseResults={handleClearQuery}
                        handleSearchQuery={handleSearchQuery}
                        queryText={queryText}
                        handleQueryChange={handleQueryChange}
                    />
                    <QueryResults
                        resultsArray={resultsArray}
                        isQuerySearching={isSearching}
                        resultsOpen={resultsOpen}
                        handlePlacePick={handlePlacePick}
                        queryText={queryText}
                    />
                </main>
                <SlidebarInfo placeData={selectedPlaceData} />
                <SlidebarFieldset name='partyTitle' label="Название тусы" />
                <SlidebarFooter />
            </SlideBar>
            <YMaps query={{ apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    width={'100%'}
                    height={'100vh'}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                    }}
                    controls='geolocationControl'
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

export default Query;