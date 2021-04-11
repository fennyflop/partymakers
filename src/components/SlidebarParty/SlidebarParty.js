import './SlidebarParty.css';

const SlidebarParty = ({ party, selectParty }) => {

    function handleSelectParty() {
        selectParty(party);
    }

    return (
        <li className="slidebar-party">
            <div className="slidebar-party__info">
                <h3 className="slidebar-party__name">{party.partyName}</h3>
                <p className="slidebar-party__info slidebar-party__age">{party.partyAge}</p>
            </div>
            <div className="slidebar-party__info">
                <div className="slidebar-party__place">
                    <p className="slidebar-party__place-additional">{party.partyLocationAdditional}</p>
                    <p className="slidebar-party__place-main">{party.partyLocationMain}</p>
                </div>
                <div className="slidebar-party__values">
                    <p className="slidebar-party__cost">{party.partyPrice} RUB</p>
                    <p className="slidebar-party__time">{party.partyTime}</p>
                </div>
            </div>
            <button className="slidebar-party__join" onClick={handleSelectParty}>Присоединиться</button>
        </li >
    );
}

export default SlidebarParty;