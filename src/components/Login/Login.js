import './Login.css';
import { NavLink } from 'react-router-dom';
import api from '../../utils/api';
import {useFormWithValidation} from '../../utils/useForm';

const Login = () => {

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function loginUser (evt) {
        evt.preventDefault();
        api.loginUser(values.username, values.password)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <section className="login">
            <h1 className="login__title">
                Вход
            </h1>
            <p className="login__subheading">
                Займет не более 1 минуты
            </p>
            <form className="login__form" onSubmit={loginUser}>
                <fieldset className="login__fieldset">
                    <label className="login__label">Имя</label>
                    <input className="login__input" required min="2" max="20" name="username" onChange={handleChange} />
                </fieldset>
                <fieldset className="login__fieldset">
                    <label className="login__label">Пароль</label>
                    <input className="login__input" type="password" required min="8" max="32" name="password" onChange={handleChange} />
                </fieldset>
                <button type="submit" className="login__submit">Поехали</button>
                <NavLink to="/sign-up">нет акка? ну кликай сюда</NavLink>
            </form>
        </section>
    );
}

export default Login;

// <section className="login">
// <h1 className="login__title">
//     Регистрация
// </h1>
// <p className="login__subheading">
//     Займет не более 1 минуты
// </p>
// <form className="login__form">
//     <fieldset className="login__fieldset">
//         <label className="login__label">Номер телефона</label>
//         <input className="login__input" required />
//     </fieldset>
//     <fieldset className="login__fieldset">
//         <label className="login__label">Проверочный код</label>
//         <div className="login__code">
//             <input className="login__input" required />
//             <div className="login__border">
//                 <button className="login__send">Выслать</button>
//             </div>
//         </div>
//     </fieldset>
//     <fieldset className="login__fieldset">
//         <label className="login__label">Придумайте пароль</label>
//         <input className="login__input" type="password" required />
//     </fieldset>
//     <button type="submit" className="login__submit">Поехали</button>
// </form>
// </section>