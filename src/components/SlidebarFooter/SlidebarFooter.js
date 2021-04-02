import './SlidebarFooter.css';
import vkontakteIcon from '../../images/vkontakteIcon.svg';
import instagramIcon from '../../images/instagramIcon.svg';
import facebookIcon from '../../images/facebookIcon.svg';

const SlidebarFooter = () => {
    return (
        <footer className="slidebar-footer">
            <ul className="slidebar-footer__links">
                <li className="slidebar-footer__link">Главная</li>
                <li className="slidebar-footer__link">О нас</li>
                <li className="slidebar-footer__link">Найти party</li>
                <li className="slidebar-footer__link">Создать party</li>
            </ul>
            <ul className="slidebar-footer__socials">
                <li><img className="slidebar-footer__social" alt="Vkontakte" src={vkontakteIcon} /></li>
                <li><img className="slidebar-footer__social" alt="Instagram" src={instagramIcon} /></li>
                <li><img className="slidebar-footer__social" alt="Facebook" src={facebookIcon} /></li>
            </ul>
        </footer>
    )
}

export default SlidebarFooter;