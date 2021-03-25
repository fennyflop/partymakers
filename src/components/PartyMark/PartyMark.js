import { useState } from 'react';
import { Placemark } from 'react-yandex-maps';

const PartyMark = ({ party, handleSelectParty }) => {

    const [isSelected, setIsSelected] = useState();

    if (!party) {
        return null;
    }

    function handlePartyClick() {
        return handleSelectParty(party);
    }

    return (
        <Placemark
            defaultGeometry={party.coordinates}
            options={{
                iconColor: isSelected ? 'red' : 'black',
                preset: 'islands#redCircleDotIcon'
            }}
            onClick={handlePartyClick}
        />
    );
};

export default PartyMark;