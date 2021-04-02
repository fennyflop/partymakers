import './SlideBar.css';

const SlideBar = (props) => {
    return (
        <section className="slidebar">
            {props.children}
        </section>
    );
}

export default SlideBar;