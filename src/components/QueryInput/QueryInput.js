import './QueryInput.css';
import queryIcon from '../../images/queryIcon.svg';

const QueryInput = () => {
    return (
        <form className="query">
            <img className="query__icon" src={queryIcon} alt="queryIcon" draggable="false" />
            <input className="query__input" autoComplete="off" required name="query" type="text" placeholder="Поиск туссовки" />
            <button className="query__button query__search" type="submit"></button>
            <button className="query__button query__clear"></button>
        </form>
    );
}

export default QueryInput;