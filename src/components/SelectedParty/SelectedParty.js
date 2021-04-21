import './SelectedParty.css';

const SelectedParty = ({party}) => {
    return (
        <section className="selected-party">
            <header className="selected-party__header">
                <h2 className="selected-party__title">
                    {party.partyName}
                </h2>
                <p className='selected-party__age'>
                    {party.partyAge}+
                </p>
            </header>
                <p className="selected-party__time">
                Дата:<span className="selected-party__keyword">{party.partyDate.split("-").reverse().join("/")}</span>
                </p>
                <p className="selected-party__time">
                Начинается в<span className="selected-party__keyword">{party.partyTime}</span>
                </p>
        </section>
    )
}

export default SelectedParty;