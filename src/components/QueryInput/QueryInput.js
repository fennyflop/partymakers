import './QueryInput.css';
import queryIcon from '../../images/queryIcon.svg';
import { useEffect } from 'react';

const QueryInput = ({ handleSearchQuery, handleCloseResults, queryText, handleQueryChange }) => {

    function handleGeoSearch() {
        handleSearchQuery(queryText);
    }

    function handleQuerySubmit(evt) {
        evt.preventDefault();
        handleGeoSearch();
    }

    useEffect(() => {
        handleGeoSearch();
    }, [queryText])

    return (
        <>
            <form className="query__form" onSubmit={handleQuerySubmit}>
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
                <button className="query__button query__clear" onClick={handleCloseResults} type="reset"></button>
            </form>
        </>
    );
}

export default QueryInput;