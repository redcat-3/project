import { ChangeEventHandler, FormEvent, useState } from 'react';
import { AppRoute, CoachMeritLength, ErrorMessage, MAX_AVATAR_SIZE, MAX_TYPES_COUNT, TabIndex } from '../../constant';
import { useAppDispatch } from '../../hooks';
import { LEVELS, UserLevel } from '../../types/user-data';
import { redirectToRoute } from '../../store/action';
import { WORKOUT_TYPES } from '../../types/workout-data';
import { levelToValue, workoutTypeToName, workoutTypeToValue } from '../../utils';

function PopupQuestionnaireCoach(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    level: UserLevel.Beginner,
    typeOfTrain: [''],
    certificate: [''],
    trainingReady: false,
    merit: '',
  });
  const [typesCountError, setTypesCountError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [certificateError, setCertificateError] = useState(false);
  const [meritError, setMeritError] = useState(true);
  const handleMeritChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, merit: event.target.value});
    if(event.target.value.length < CoachMeritLength.Min || event.target.value.length > CoachMeritLength.Max) {
      setMeritError(true);
      setIsDisabled(true);
    } else {
      setMeritError(false);
      setIsDisabled(false);
    }
  };
  const checkTypeChecked = (type: string) => {
    return formData.typeOfTrain.includes(type);
  }
  const handleCertificateChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    if(event.target.files) {
      if(event.target.files[0].size > MAX_AVATAR_SIZE) {
        setIsDisabled(true);
        setCertificateError(true);
      }
      const files = formData.certificate;
      files.push(URL.createObjectURL(event.target.files[0]))
      setFormData({...formData, certificate: files});
      setCertificateError(false);
      setIsDisabled(false);
      return;
    }
    return;
  };
  const onSendForm = () => {
    if (
      formData.merit !== ''
    ){
      dispatch(redirectToRoute(AppRoute.PersonalAccount))
    }
  };
  return (
    <div className="popup-form popup-form--questionnaire-coach">
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__form">
            <form
              method="get"
              onSubmit={(evt: FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                onSendForm();
              }}
            >
              <div className="questionnaire-coach">
                <h1 className="visually-hidden">Опросник</h1>
                <div className="questionnaire-coach__wrapper">
                  <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваша специализация (тип) тренировок</span>
                    <div className="specialization-checkbox questionnaire-coach__specializations">
                    {WORKOUT_TYPES.map((item) => (
                        <div className="btn-checkbox">
                          <label>
                            <input
                              className="visually-hidden"
                              type="checkbox"
                              name="specialisation"
                              value={workoutTypeToValue(item)}
                              onClick={() => {
                                const currentType: string = workoutTypeToValue(item);
                                const types = formData.typeOfTrain.slice();
                                const index = types.indexOf(currentType);
                                if(index !== -1) {
                                  types.splice(index,1);
                                  if(types.length <= MAX_TYPES_COUNT) {
                                    setTypesCountError(false);
                                  }
                                } else if(types.length <= MAX_TYPES_COUNT) {
                                  types.push(currentType);
                                  setTypesCountError(false);
                                } else {
                                  setTypesCountError(true);
                                }
                                setFormData({...formData, typeOfTrain: types});
                              }}
                              checked={checkTypeChecked(workoutTypeToValue(item))}
                            />
                            <span className="btn-checkbox__btn">{workoutTypeToName(item)}</span>
                          </label>
                        </div>
                      ))}
                      {typesCountError && <span className="custom-input__error">{ErrorMessage.TypesCount}</span>}
                    </div>
                  </div>
                  <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваш уровень</span>
                    <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-coach__radio">
                    {LEVELS.map((item) => (
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input
                              className="visually-hidden"
                              type="radio"
                              name="level"
                              value={item}
                              onClick={() => {
                                setFormData({...formData, level: levelToValue(item)});
                              }}
                              checked={formData.level === levelToValue(item)}
                            />
                            <span className="custom-toggle-radio__icon"></span>
                            <span className="custom-toggle-radio__label">{item}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
                    <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                      <label>
                        <span className="drag-and-drop__label" tabIndex={TabIndex.index0}>Загрузите сюда файлы формата PDF, JPG или PNG
                          <svg width="20" height="20" aria-hidden="true">
                            <use xlinkHref="#icon-import"></use>
                          </svg>
                        </span>
                        <input
                          type="file"
                          name="import"
                          tabIndex={TabIndex.indexMinus1}
                          accept=".pdf, .jpg, .png"
                          onChange={handleCertificateChange}
                          value={formData.certificate}
                        />
                        {certificateError && <span className="custom-input__error">{ErrorMessage.File}</span>}
                      </label>
                    </div>
                  </div>
                  <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Расскажите о своём опыте, который мы сможем проверить</span>
                    <div className="custom-textarea questionnaire-coach__textarea">
                      <label>
                        <textarea
                          name="merit"
                          placeholder=" "
                          value={formData.merit}
                          onChange={handleMeritChange}
                        ></textarea>
                        {meritError && <span className="custom-textarea">{ErrorMessage.Merit}</span>}
                      </label>
                    </div>
                    <div className="questionnaire-coach__checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value="individual-training"
                          name="individual-training"
                          onClick={() => {
                            setFormData({...formData, trainingReady: !formData.trainingReady});
                          }}
                          checked={formData.trainingReady}
                        />
                        <span className="questionnaire-coach__checkbox-icon">
                          <svg width="9" height="6" aria-hidden="true">
                            <use xlinkHref="#arrow-check"></use>
                          </svg>
                        </span>
                        <span className="questionnaire-coach__checkbox-label">Хочу дополнительно индивидуально тренировать</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn questionnaire-coach__button"
                  type="submit"
                  disabled={isDisabled}
                >Продолжить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupQuestionnaireCoach;
