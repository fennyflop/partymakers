import './MakeParty.css';
import { YMaps, Map, SearchControl } from 'react-yandex-maps';
import { useState, useRef } from 'react';


function MakeParty() {

    const searchControlRef = useRef(null);

    function handleYandexSearch(evt) {
        console.log(evt);
    }

    const onResultShow = () => {
        if (searchControlRef.current) {
            // Тут вызвать метод который наиболее подходит
            // https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/control.SearchControl-docpage/
            console.log(searchControlRef.current.getResultsArray()[0]._geoObjectComponent._geometry._coordinates);
        }
    };

    return (
        <section className="maker">
            <YMaps query={{ apikey: "4f28bcfa-4813-4a34-af66-e67428ddd2f7" }}>
                <Map
                    width={'100%'}
                    height={'100vh'}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                    }}
                >
                    <SearchControl
                        instanceRef={searchControlRef}
                        onClear={() => console.log("clear")}
                        onResultShow={onResultShow}
                        options={{
                            floatIndex: 100,
                        }} />
                </Map>
            </YMaps>
        </section >
    );
}

export default MakeParty;