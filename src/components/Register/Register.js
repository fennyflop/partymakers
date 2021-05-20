import { NavLink } from 'react-router-dom';
import './Register.css';
import {useFormWithValidation} from '../../utils/useForm';
import api from '../../utils/api';

const Register = () => {

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function createNewUser(evt) {
        evt.preventDefault();
        api.createNewUser(values.username, values.firstName, values.secondName, values.password)
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
            Регистрация
        </h1>
        <p className="login__subheading">
            Займет не более 1 минуты
        </p>
        <form className="login__form" onSubmit={createNewUser}>
        <fieldset className="login__fieldset">
                <label className="login__label">Псевдоним</label>
                <input className="login__input" required min="2" max="20" name="username" onChange={handleChange} value={values.username} />
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label">Имя</label>
                <input className="login__input" required min="2" max="15" name="firstName" onChange={handleChange} value={values.firstName} />
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label">Фамилия</label>
                <input className="login__input" required min="2" max="15" name="secondName" onChange={handleChange} value={values.secondName} />
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label">Пароль</label>
                <input className="login__input" type="password" required min="8" max="32" name="password" onChange={handleChange} value={values.password} />
            </fieldset>
            <button type="submit" className="login__submit">Поехали</button>
            <NavLink to="/sign-in">есть акк? ну кликай сюда</NavLink>
        </form>
    </section>
    )
}

export default Register;