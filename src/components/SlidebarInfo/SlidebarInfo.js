import './SlidebarInfo.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clipboardIcon from '../../images/clipboardIcon.webp';
import { useEffect, useState } from 'react';

const SlidebarInfo = ({ placeData }) => {

    const [isCopied, setIsCopied] = useState(false);

    if (!placeData) return null;

    function handleCopy() {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000)
    }

    return (
        placeData.length ?
            <header className="slidebar-info">
                <h1 className="slidebar-info__title">{placeData[1]}</h1>
                <p className="slidebar-info__description">{placeData[2]}</p>
                <span className="slidebar-info__coordinates">Координаты:
                <CopyToClipboard text={placeData[0].join(",")} onCopy={handleCopy}>
                        <button className="slidebar-info__clipboard">{placeData[0].join(",")}<img className="slidebar-info__clipboard-icon" src={clipboardIcon} alt="icon " /></button>
                    </CopyToClipboard>
                </span>
                <p className={`slidebar-info__description ${!isCopied && 'slidebar-info__description-hidden'}`}>Скопировано!😀</p>
            </header>
            :
            <header className="slidebar-info">
                <h1 className="slidebar-info__title">Место не выбрано</h1>
                <p className="slidebar-info__description">Здесь отобразится выбранное место.</p>
            </header>
    );
}

export default SlidebarInfo;