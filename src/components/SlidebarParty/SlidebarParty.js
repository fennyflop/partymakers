import './SlidebarParty.css';

const SlidebarParty = ({ party }) => {
    return (
        <li className="slidebar-party">
            <h3 className="slidebar-party__info slidebar-party__name">{party.partyName}</h3>
            <p className="slidebar-party__info slidebar-party__time">{party.partyTime}</p>
            <p className="slidebar-party__info slidebar-party__age">{party.partyAge}</p>
            <p className="slidebar-party__info slidebar-party__cost">{party.partyPrice + '🤑' || 'Бесплатно'}</p>
            <button className="slidebar-party__join">🤘</button>
        </li>
    );
}

export default SlidebarParty;