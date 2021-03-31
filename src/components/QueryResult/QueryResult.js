import './QueryResult.css';
import searchIcon from '../../images/querySearch.svg';

const QueryResult = ({ resultData, handlePlacePick }) => {
    function handlePick() {
        handlePlacePick(resultData);
    }
    if (!resultData) {
        return 0;
    }
    return (
        <li className="result" onClick={handlePick}>
            <img className="result__image" src={searchIcon} alt="search-icon" />
            <div className="result__text">
                <h3 className="result__name">{resultData[0]}</h3>
                <p className="result__description">{resultData[1]}</p>
            </div>
        </li>
    );
}

export default QueryResult;