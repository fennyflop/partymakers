import './PartyForm.css';

function PartyForm() {
    return (
        <form className="partyform">
            <input className="partyform__input" placeholder="Название" />
            <input className="partyform__input" placeholder="Время" />
            <input className="partyform__input" placeholder="Возраст" />
            <input className="partyform__input" placeholder="Цена" />
            <button className="partyform__submit" type="submit"></button>
        </form>
    );
}

export default PartyForm;