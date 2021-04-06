import './SlidebarFooter.css';
import vkontakteIcon from '../../images/vkontakteIcon.svg';
import instagramIcon from '../../images/instagramIcon.svg';
import facebookIcon from '../../images/facebookIcon.svg';
import { NavLink } from 'react-router-dom';

const SlidebarFooter = () => {
    return (
        <footer className="slidebar-footer">
            <ul className="slidebar-footer__links">
                <NavLink className="slidebar-footer__link" activeClassName="slidebar-footer__link-active" exact to="/">Главная</NavLink>
                <NavLink className="slidebar-footer__link" activeClassName="slidebar-footer__link-active" to="/about">О нас</NavLink>
                <NavLink className="slidebar-footer__link" activeClassName="slidebar-footer__link-active" to="/search">Найти party</NavLink>
                <NavLink className="slidebar-footer__link" activeClassName="slidebar-footer__link-active" to="/make">Создать party</NavLink>
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