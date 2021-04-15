import './SelectParty.css';
import { YMaps, Map, Clusterer, SearchControl } from 'react-yandex-maps';
import { useState, useRef, useEffect } from 'react';
import PartyMark from '../PartyMark/PartyMark';
import array from '../../constants/constants';

import Query from '../Query/Query';
import SlideBar from '../SlideBar/SlideBar';
import SlidebarInfo from '../SlidebarInfo/SlidebarInfo';
import SlidebarTime from '../SlidebarTime/SlidebarTime';
import SlibebarList from '../SlibebarList/SlibebarList';
import SlidebarSwipe from '../SlidebarSwipe/SlidebarSwipe';
import SlidebarFooter from '../SlidebarFooter/SlidebarFooter';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';

function SelectParty() {

    const mapRef = useRef(null);
    const searchRef = useRef(null);
    const [isListSelected, setIsListSelected] = useState(true);
    const [resultShow, setResultShow] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const [slidebarDisplayed, setSlidebarDisplayed] = useState(false);

    function selectList() {
        setIsListSelected(true);
    }

    function selectParty() {
        setIsListSelected(false);
    }

    function toggleSlidebar() {
        setSlidebarDisplayed(!slidebarDisplayed);
    }

    function handleResultShow() { // mounts result show on result show event
        setResultShow(resultShow + 1);
    }

    function handleSelectParty(partyData) {
        setSelectedParty(partyData);
        if (mapRef.current) {
            mapRef.current.panTo(partyData.coordinates)
                .then(() => {
                    setSlidebarDisplayed(true);
                })
        }
    }

    return (
        <>
            <SlideBar slidebarDisplayed={slidebarDisplayed} toggleSlidebar={toggleSlidebar}>
                <Query displayInfo={false} searchRef={searchRef} result={resultShow} />
                <div className="slidebar-select__router">
                    <button className={`slidebar-select__button ${!isListSelected && 'slidebar-select__button-selected'}`} onClick={selectParty}>Список</button>
                    <button className={`slidebar-select__button ${isListSelected && 'slidebar-select__button-selected'}`} disabled={selectedParty ? false : true} onClick={selectList}>{selectedParty?.partyName || 'Не выбрано'}</button>
                </div>
                {
                    isListSelected ?
                        <>
                            <SlidebarInfo placeData={[selectedParty.coordinates, selectedParty.partyLocationMain, selectedParty.partyLocationAdditional]} />
                            <SlidebarTime displayedTime={selectedParty.partyTime} displayed={true} />
                            <SlidebarFieldset displayed={true} label="Название тусы 👀" value={selectedParty.partyName} />
                            <SlidebarFieldset displayed={true} label="Входной возраст 🤪" value={selectedParty.partyAge} />
                            <SlidebarFieldset displayed={true} label="Стоимость RUB 🤑" value={selectedParty.partyPrice} />
                            <button className="slidebar-select__select-button">Купить</button>
                        </>
                        :
                        <SlibebarList partyArray={array} selectParty={handleSelectParty} />
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