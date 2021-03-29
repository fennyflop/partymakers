import { YMaps, Map, Clusterer, SearchControl } from 'react-yandex-maps';
import { useState, useRef } from 'react';
import PartyMark from '../PartyMark/PartyMark';
import PartyBlock from '../PartyBlock/PartyBlock';
import array from '../../constants/constants';

function SelectParty() {

    const mapRef = useRef(null);
    const [selectedParty, setSelectedParty] = useState(null);

    function handleSelectParty(party) {
        setSelectedParty(party);
        if (mapRef.current) {
            mapRef.current.panTo(party.coordinates)
                .then(() => {
                    console.log('party selected succesfully!' + party);
                })
                .catch((err) => {
                    console.log('party selection failed: ' + err);
                })
        }
    }

    return (
        <>
            <YMaps query={{ lang: 'RU', apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    instanceRef={ref => {
                        if (ref) mapRef.current = ref;
                    }}
                    width={'100%'}
                    height={'100vh'}
                    state={{
                        center: [55.759590, 37.616466],
                        zoom: 10,
                    }}
                >
                    <Clusterer
                        options={{
                            preset: 'islands#redClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {
                            array.map((party, i) => {
                                return <PartyMark party={party} handleSelectParty={handleSelectParty} key={i} />
                            })
                        }
                    </Clusterer>
                    <SearchControl
                        options={{
                            noPopup: false,
                            zoomMargin: 15,
                            placeholderContent: "Найти туссовку",
                            popupItemLayout: 'islands#searchControlPopupItemLayout',
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
}

export default SelectParty;

{/* <>
<YMaps query={{ lang: 'RU' }}>
    <PartyBlock selectedParty={selectedParty} handleReturn={handleReturn} />
    <Map
        instanceRef={ref => {
            if (ref) mapRef.current = ref;
        }}
        width={selectedParty ? '50%' : '100%'}
        height={'100vh'}
        state={{
            center: selectedParty ? selectedParty.coordinates : [55.789241, 37.610748],
            zoom: 10,
        }}
    >
        <Clusterer
            options={{
                preset: 'islands#redClusterIcons',
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
</> */}