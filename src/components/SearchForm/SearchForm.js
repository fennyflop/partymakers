import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search">
            <div className="search__query">
                <input className="search__input" type="text" placeholder="Найти туссовку" />
                <button className="search__submit">Поиск</button>
            </div>
        </form>
    );
}

export default SearchForm;