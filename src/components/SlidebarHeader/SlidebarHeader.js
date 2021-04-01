import './SlidebarHeader.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SlidebarHeader = () => {
    return (
        <header className="slidebar-header">
            <h1 className="slidebar-header__title">река Олег</h1>
            <p className="slidebar-header__description">Охотский район, Хабаровский край, Россия</p>
            <span className="slidebar-header__coordinates">Координаты:
            <CopyToClipboard text={'2323,32323'}>
                    <button className="slidebar-header__clipboard">2323,32323</button>
                </CopyToClipboard>
            </span>
        </header>
    );
}

export default SlidebarHeader;