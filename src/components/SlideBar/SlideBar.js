import { useState } from 'react';
import './SlideBar.css';

const SlideBar = (props) => {
    return (
        <>
            <section className="slidebar">
                <main className={`slidebar__main  ${props.slidebarDisplayed && 'slidebar__main-toggled'}`}>
                    {props.children}
                </main>
                <button onClick={props.toggleSlidebar} className={`slidebar__toggler ${props.slidebarDisplayed ? 'slidebar__toggler-toggled' : ''}`}></button>
            </section>
        </>
    );
}

export default SlideBar;