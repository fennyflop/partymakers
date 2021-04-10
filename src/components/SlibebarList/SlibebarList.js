import './SlibebarList.css';
import SlidebarParty from '../SlidebarParty/SlidebarParty';

const SlibebarList = ({ partyArray }) => {
    return (
        <ul className="slidebar-list">
            {partyArray.map((party, i) => {
                return <SlidebarParty party={party} />
            })}
        </ul>
    )
}

export default SlibebarList;