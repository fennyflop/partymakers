import './SlibebarList.css';
import SlidebarParty from '../SlidebarParty/SlidebarParty';
import { useState, useEffect } from 'react';

const SlibebarList = ({ partyArray, selectParty }) => {

    const [elements, setElements] = useState(3);
    const [displayedParties, setDisplayedParties] = useState([]);

    function handleMoreParties() {
        setElements(elements + 1);
    }

    useEffect(() => {
        let accumulator = [];
        // Нужен цикл for для break;
        for (let i = 0; i < elements; i++) {
            if (i < elements) {
                accumulator.push(partyArray[i]);
            } else {
                break;
            }
        };
        setDisplayedParties(accumulator);
    }, [partyArray, elements]);

    return (
        <ul className="slidebar-list">
            {displayedParties.map((party, i) => {
                return <SlidebarParty party={party} selectParty={selectParty} />
            })}
            <button className={`slidebar-list__more ${elements + 1 === partyArray.length && 'slidebar-list__more-hidden'}`} onClick={handleMoreParties}>Ещё</button>
        </ul>
    )
}

export default SlibebarList;