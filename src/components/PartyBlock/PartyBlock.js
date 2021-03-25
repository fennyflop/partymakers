import './PartyBlock.css';

function PartyBlock({ selectedParty, handleReturn }) {

    if (!selectedParty) return null;

    return (
        <article className="partyblock">
            <ul className="partyblock__list">
                <li className="partyblock__info">{selectedParty.partyName || ''}</li>
                <li className="partyblock__info">{selectedParty.partyTime || ''}</li>
                <li className="partyblock__info">{selectedParty.partyAge || ''}+</li>
                <li className="partyblock__info">{selectedParty.partyPrice || ''} RUB</li>
            </ul>
            <button className="partyblock__button">JOIN</button>
            <button className="partyblock__button" onClick={() => { handleReturn() }}>RETURN</button>
        </article>
    );
}

export default PartyBlock;