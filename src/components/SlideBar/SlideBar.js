import { useState } from 'react';
import './SlideBar.css';

const SlideBar = (props) => {

    const [slidebarDisplayed, setSlidebarDisplayed] = useState(true);

    function toggleSlidebar() {
        setSlidebarDisplayed(!slidebarDisplayed);
    }

    return (
        <>
            <section className="slidebar">
                <main className={`slidebar__main  ${slidebarDisplayed && 'slidebar__main-toggled'}`}>
                    {props.children}
                </main>
                <button onClick={toggleSlidebar} className={`slidebar__toggler ${slidebarDisplayed ? 'slidebar__toggler-toggled' : ''}`}></button>
            </section>
        </>
    );
}

export default SlideBar;