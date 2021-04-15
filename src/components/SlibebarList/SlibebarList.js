import './SlibebarList.css';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';
import SlidebarParty from '../SlidebarParty/SlidebarParty';
import Preloader from '../Preloader/Preloader';
import QueryNone from '../QueryNone/QueryNone';
import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../../utils/useForm';

const SlibebarList = ({ partyArray, selectParty }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [elements, setElements] = useState(3);
    const [searchedArray, setSearchedArray] = useState(partyArray);
    const [displayedParties, setDisplayedParties] = useState([]);

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleMoreParties() {
        setElements(elements + 1);
    }

    async function searchQuery(query) {
        if (!query) return partyArray;
        setIsLoading(true);
        const regExp = new RegExp(`${query}`, "i");
        const filteredParties = partyArray.filter((e) => {
            return regExp.test(e.partyName);
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return filteredParties;
    }

    useEffect(() => {
        searchQuery(values.query)
            .then((searchedArray) => {
                setSearchedArray(searchedArray);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [values.query])

    useEffect(() => {
        let accumulator = [];
        // Нужен цикл for для break;
        for (let i = 0; i < elements; i++) {
            if (i < elements && i < searchedArray.length) {
                accumulator.push(searchedArray[i]);
            } else {
                break;
            }
        };
        console.log(accumulator);
        setDisplayedParties(accumulator);
    }, [searchedArray, elements]);

    return (
        <ul className="slidebar-list">
            <form className="slidebar-list__form">
                <SlidebarFieldset label="Найти тусу" isRequired={true} name="query" handleChange={handleChange} value={values.query} />
            </form>
            {
                isLoading ?
                    <Preloader />
                    :
                    (
                        searchedArray.length ?
                            displayedParties.map((party, i) => {
                                return <SlidebarParty party={party} selectParty={selectParty} key={i} />
                            })
                            :
                            <QueryNone />
                    )
            }
            <button className={`slidebar-list__more ${(elements + 1 === searchedArray.length || isLoading || searchedArray.length === 0 || searchedArray.length < elements) && 'slidebar-list__more-hidden'}`} onClick={handleMoreParties}>Показать ещё</button>
        </ul>
    )
}

export default SlibebarList;