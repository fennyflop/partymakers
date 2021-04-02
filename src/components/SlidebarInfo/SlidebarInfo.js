import './SlidebarInfo.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clipboardIcon from '../../images/clipboardIcon.webp';

const SlidebarInfo = () => {
    return (
        <header className="slidebar-info">
            <h1 className="slidebar-info__title">река Олег</h1>
            <p className="slidebar-info__description">Охотский район, Хабаровский край, Россия</p>
            <span className="slidebar-info__coordinates">Координаты:
            <CopyToClipboard text={'2323,32323'}>
                    <button className="slidebar-info__clipboard">2323,32323<img className="slidebar-info__clipboard-icon" src={clipboardIcon} alt="icon " /></button>
                </CopyToClipboard>
            </span>
        </header>
    );
}

export default SlidebarInfo;