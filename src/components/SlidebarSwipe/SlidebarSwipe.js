import './SlidebarSwipe.css';

const SlidebarSwipe = ({ forward, backward }) => {
    return (
        <div className="slidebar-swipe">
            <button onClick={backward} className="slidebar-swipe__button">Назад</button>
            <button onClick={forward} className="slidebar-swipe__button">Вперёд</button>
        </div>
    );
};

export default SlidebarSwipe;