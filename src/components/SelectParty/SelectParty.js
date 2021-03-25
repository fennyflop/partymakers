import { YMaps, Map, Clusterer } from 'react-yandex-maps';
import { useState } from 'react';
import PartyMark from '../PartyMark/PartyMark';
import PartyBlock from '../PartyBlock/PartyBlock';
import array from '../../constants/constants';

function SelectParty() {

    const party = {
        partyName: "Re:flex Moscow",
        partyAge: 18,
        partyPrice: 1500,
        partyTime: '21:00',
        coordinates: [55.674438, 37.412343],
    };

    const [selectedParty, setSelectedParty] = useState(null);

    function handleSelectParty(party) {
        setSelectedParty(party);
    }

    function handleReturn() {
        setSelectedParty(null);
    }

    return (
        <>
            <YMaps query={{ lang: 'RU' }} className="a">
                <PartyBlock selectedParty={selectedParty} handleReturn={handleReturn} />
                <Map
                    width={selectedParty ? '50%' : '100%'}
                    height={'100vh'}
                    state={{
                        center: selectedParty ? selectedParty.coordinates : [55.755316, 37.621570],
                        zoom: 10,
                    }}
                    defaultState={{
                        center: selectedParty ? selectedParty.coordinates : [55.755316, 37.621570],
                        zoom: 10,
                    }}
                >
                    <Clusterer
                        options={{
                            preset: 'islands#RedClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {
                            array.map((party, i) => {
                                return <PartyMark party={party} handleSelectParty={handleSelectParty} key={i} />
                            })
                        }
                    </Clusterer>
                </Map>
            </YMaps>
        </>
    );
}

export default SelectParty;
