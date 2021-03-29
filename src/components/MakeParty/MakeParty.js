import './MakeParty.css';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
import { useState, useRef, useEffect } from 'react';


function MakeParty() {

    const [query, setQuery] = useState(null);
    const [coordinates, setCoordinates] = useState([]);
    const searchRef = useRef(null);

    const onResultShow = () => {
        if (searchRef.current) {
            setCoordinates(searchRef.current.getResultsArray()[0]._geoObjectComponent._geometry._coordinates);
        }
    };

    const handleQuery = (evt) => {
        setQuery(evt.target.value);
    }

    const handleQuerySubmit = (evt) => {
        evt.preventDefault();
        if (query && searchRef.current) return searchRef.current.search(query);
    }

    useEffect(() => {
        console.log(coordinates);
    }, [coordinates])

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
                    controls='geolocationControl'
                >
                    <SearchControl
                        instanceRef={ref => {
                            if (ref) searchRef.current = ref;
                        }}
                        onResultShow={onResultShow}
                        option={{
                            noPopup: false,
                            zoomMargin: 15,
                        }}
                    />
                </Map>
            </YMaps>
        </section >
    );
}

export default MakeParty;