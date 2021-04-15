import './SlidebarParty.css';
import bookmarkIcon from '../../images/bookmark.svg';

const SlidebarParty = ({ party, selectParty }) => {

    function handleSelectParty() {
        selectParty(party);
    }

    return (
        <li className="slidebar-party">
            <div className="slidebar-party__header">
                <h3 className="slidebar-party__name">{party.partyName}</h3>
                <div className="slidebar-party__buttons">
                    <p className="slidebar-party__time">{party.partyTime}</p>
                    <button className="slidebar-party__button slidebar-party__button-bookmark"></button>
                    <button className="slidebar-party__button slidebar-party__button-join" onClick={handleSelectParty} aria-label="Место на карте"></button>
                </div>
            </div>
            <div className="slidebar-party__info">
                <h3 className="slidebar-party__place">{party.partyLocationAdditional}</h3>
                <p className="slidebar-party__age">{party.partyAge}</p>
            </div>
            <div className="slidebar-party__info">
                <h3 className="slidebar-party__place">{party.partyLocationMain}</h3>
                <p className="slidebar-party__price">{party.partyPrice ? party.partyPrice + ' RUB' : 'Бесплатно'}</p>
            </div>
        </li>
    );
}

export default SlidebarParty;