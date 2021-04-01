import './QueryResults.css';
import QueryLoading from '../QueryLoading/QueryLoading';
import QueryResult from '../QueryResult/QueryResult';

const QueryResults = ({ resultsArray, resultsOpen, isQuerySearching, handlePlacePick, queryText }) => {
    return (
        <ul className={`query__results ${(resultsOpen && queryText) && 'query__results-opened'}`}>
            {
                isQuerySearching ?
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
    );
}

export default QueryResults;