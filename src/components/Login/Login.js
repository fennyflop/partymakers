import './Login.css';

const Login = () => {
    return (
        <section className="login">
            <h1 className="login__title">
                Регистрация
            </h1>
            <p className="login__subheading">
                Займет не более 1 минуты
            </p>
            <form className="login__form">
                <fieldset className="login__fieldset">
                    <label className="login__label">Номер телефона</label>
                    <input className="login__input" required />
                </fieldset>
                <fieldset className="login__fieldset">
                    <label className="login__label">Проверочный код</label>
                    <div className="login__code">
                        <input className="login__input" required />
                        <div className="login__border">
                            <button className="login__send">Выслать</button>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="login__fieldset">
                    <label className="login__label">Придумайте пароль</label>
                    <input className="login__input" type="password" required />
                </fieldset>
                <button type="submit" className="login__submit">Поехали</button>
            </form>
        </section>
    );
}

export default Login;