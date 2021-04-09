import './Query.css';
import { useEffect, useState } from 'react';
import QueryInput from '../QueryInput/QueryInput';
import QueryResults from '../QueryResults/QueryResults';

const Query = ({ searchRef, result, handleDisplayPlace, displayInfo }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [resultsArray, setResultsArray] = useState([]);

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
        if (displayInfo) handleDisplayPlace(placeData);
        const generatedQuery = placeData[1] + ', ' + placeData[2];
        setQueryText(generatedQuery);
    }

    function handleSearchQuery(queryText) {
        if (!searchRef.current) return;
        setIsSearching(true); // Start searching
        searchRef.current.search(queryText)
            .then(() => {
                const geoResultsArray = searchRef.current.getResultsArray();
                if (geoResultsArray.length) return setResultsArray(
                    geoResultsArray.map((e) => {
                        if (geoResultsArray.length === 1) setResultsOpen(false);
                        setResultsOpen(true);
                        return [e.geometry._coordinates, e.properties._data.name, e.properties._data.description];
                    }));
                return Promise.reject("Ничего не найдено")
            })
            .catch(() => {
                setResultsArray([]);
            }) // finally method doesn't work
            .then(() => {
                setIsSearching(false);
            })
    }

    useEffect(() => {
        setResultsOpen(false);
    }, [result])

    return (
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
    );
}

export default Query;