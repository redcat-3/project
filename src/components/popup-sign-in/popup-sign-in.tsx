import { ChangeEventHandler, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { redirectToRoute } from "../../store/action";
import { AppRoute, EMAIL_REGEXP, ErrorMessage, UserPasswordLength } from "../../constant";
import { UserRole } from "../../types/user-data";
import { getUser } from "../../store/user-process/selectors";

function PopupSignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({...formData, email: event.target.value});
    if(EMAIL_REGEXP.test(event.target.value)) {
      setEmailError(false);
      setFormError(false);
    } else {
      setFormError(true);
      setEmailError(true);
    }
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({...formData, password: event.target.value});
    if(event.target.value.length <= UserPasswordLength.Min || UserPasswordLength.Max <= event.target.value.length) {
      setFormError(true);
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setFormError(false);
    }
  };
  
  const onSendForm = () => {
    if (
      formData.email !== '' &&
      formData.password !== ''
    ) {
      setFormError(false);
      // в случае успешной авторизации
      if(user.role === UserRole.Coach) {
        dispatch(redirectToRoute(AppRoute.PersonalAccount))
      } else if(user.role === UserRole.User) {
        dispatch(redirectToRoute(AppRoute.Main))
      }
    } else {
      setFormError(true);
    }
  };
  return (
    <div className="popup-form popup-form--sign-in">
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Вход</h1>
          </div>
          <div className="popup-form__form">
            <form
              method="get"
              onSubmit={(evt: FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                onSendForm();
              }}
            >
              <div className="sign-in">
                <div className="custom-input sign-in__input">
                  <label>
                    <span className="custom-input__label">E-mail</span>
                    <span className="custom-input__wrapper">
                      <input
                        onChange={handleEmailChange}
                        value={formData.email}
                        type="email"
                        name="email"
                      />
                    </span>
                    {emailError && <span className="custom-input__error">{ErrorMessage.Email}</span>}
                  </label>
                </div>
                <div className="custom-input sign-in__input">
                  <label>
                    <span className="custom-input__label">Пароль</span>
                    <span className="custom-input__wrapper">
                      <input
                        onChange={handlePasswordChange}
                        value={formData.password}
                        type="password"
                        name="password"
                      />
                    </span>
                    {passwordError && <span className="custom-input__error">{ErrorMessage.Password}</span>}
                  </label>
                </div>
                <button
                  className="btn sign-in__button"
                  type="submit"
                  disabled={formError}
                >Продолжить</button>
                {formError && <span className="custom-input__error">{ErrorMessage.Form}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupSignIn;
