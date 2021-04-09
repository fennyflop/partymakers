import { YMaps, Map, Clusterer, SearchControl } from 'react-yandex-maps';
import { useState, useRef } from 'react';
import PartyMark from '../PartyMark/PartyMark';
import array from '../../constants/constants';

import Query from '../Query/Query';
import SlideBar from '../SlideBar/SlideBar';
import SlidebarInfo from '../SlidebarInfo/SlidebarInfo';
import SlidebarTime from '../SlidebarTime/SlidebarTime';
import SlibebarNone from '../SlibebarNone/SlibebarNone';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';
import SlidebarFooter from '../SlidebarFooter/SlidebarFooter';

function SelectParty() {

    const mapRef = useRef(null);
    const searchRef = useRef(null);
    const [resultShow, setResultShow] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const [slidebarDisplayed, setSlidebarDisplayed] = useState(false);

    function toggleSlidebar() {
        setSlidebarDisplayed(!slidebarDisplayed);
    }

    function handleSelectParty(partyData) {
        setSelectedParty(partyData);
        if (mapRef.current) {
            mapRef.current.panTo(partyData.coordinates)
                .then(() => {
                    setSlidebarDisplayed(true);
                })
                .catch((err) => {
                    console.log('party selection failed: ' + err);
                })
        }
    }

    function handleResultShow() {
        setResultShow(resultShow + 1);
    }

    return (
        <>
            <SlideBar slidebarDisplayed={slidebarDisplayed} toggleSlidebar={toggleSlidebar}>
                <Query displayInfo={false} searchRef={searchRef} result={resultShow} />
                {
                    selectedParty ?
                        <>
                            <SlidebarInfo placeData={[selectedParty.coordinates, selectedParty.partyLocationMain, selectedParty.partyLocationAdditional]} />
                            <SlidebarTime displayedTime={selectedParty.partyTime} displayed={true} />
                            <SlidebarFieldset displayed={true} label="Название тусы 👀" value={selectedParty.partyName} />
                            <SlidebarFieldset displayed={true} label="Входной возраст 🤪" value={selectedParty.partyAge} />
                            <SlidebarFieldset displayed={true} label="Стоимость RUB 🤑" value={selectedParty.partyPrice} />
                        </>
                        :
                        <SlibebarNone />
                }
                <SlidebarFooter />
            </SlideBar>
            <YMaps query={{ lang: 'RU', apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    instanceRef={ref => {
                        if (ref) mapRef.current = ref;
                    }}
                    width={'100%'}
                    height={'100vh'}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
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
                        onResultShow={handleResultShow}
                        instanceRef={ref => {
                            if (ref) searchRef.current = ref;
                        }}
                        options={{
                            noPlacemark: true,
                            size: 'small',
                            zoomMargin: 9,
                            kind: 'locality',
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
}

export default SelectParty;