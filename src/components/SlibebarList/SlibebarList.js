import './SlibebarList.css';
import SlidebarFieldset from '../SlidebarFieldset/SlidebarFieldset';
import SlidebarParty from '../SlidebarParty/SlidebarParty';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';
import api from '../../utils/api';
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

    useEffect(() => {
        api.getAllParties()
        .then((res) => {
            setSearchedArray(res);
        })
    }, []);

    async function searchQuery(query) {
        if (!query) return partyArray;
        setIsLoading(true);
        const regExp = new RegExp(`${query}`, "i");
        const filteredParties = partyArray.filter((e) => {
            return regExp.test(e.partyName); 
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return filteredParties;
    }

    useEffect(() => {
        searchQuery(values.query)
        .then((searchedArray) => {
            setDisplayedParties(searchedArray);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [values.query])

    useEffect(() => {
        let accumulator = [];
        // Нужен цикл for для break;
        for (let i = 0; i < elements; i++) {
            if (i < elements) {
                accumulator.push(searchedArray[i]);
            } else {
                break;
            }
        };
        setDisplayedParties(accumulator);
    }, [searchedArray, elements]);

    return (
        <ul className="slidebar-list">
            <form className="slidebar-list__form">
                <SlidebarFieldset label="Найти тусу" isRequired={true} name="query" handleChange={handleChange} value={values.query} error={errors.query} />
            </form>
            {
                isLoading ?
                <Preloader />
                :
            displayedParties.map((party, i) => {
                return <SlidebarParty party={party} selectParty={selectParty} key={i} />
            })
            }
            {/* <button className={`slidebar-list__more ${elements + 1 === partyArray.length && 'slidebar-list__more-hidden'}`} onClick={handleMoreParties}>Ещё</button> */}
        </ul>
    )
}

export default SlibebarList;