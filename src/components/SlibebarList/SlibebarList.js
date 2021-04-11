import './SlibebarList.css';
import SlidebarParty from '../SlidebarParty/SlidebarParty';

const SlibebarList = ({ partyArray, selectParty }) => {
    return (
        <ul className="slidebar-list">
            {partyArray.map((party, i) => {
                return <SlidebarParty party={party} selectParty={selectParty} />
            })}
        </ul>
    )
}

export default SlibebarList;