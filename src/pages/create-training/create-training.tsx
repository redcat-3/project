import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { CountCaloriesToSpend, NameLength, TabIndex, WorkoutDescriptionLength } from '../../constant';
import { ChangeEventHandler, FormEvent, useState } from 'react';
import { WORKOUT_TIMES, WORKOUT_TYPES, WorkoutType } from '../../types/workout-data';
import { UserGender, UserLevel, LEVELS, UserTime } from '../../types/user-data';
import { levelToRussian, levelToValue, typeToRussian, workoutTypeToValue } from '../../utils';

function CreateTraning(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isTypeOpened, setIsTypeOpened] = useState(false);
  const [isTimeOpened, setIsTimeOpened] = useState(false);
  const [isLevelOpened, setIsLevelOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    background: 'image.jpg',
    level: '' as UserLevel,
    type: '' as WorkoutType,
    timeOfTraining: '' as UserTime,
    price: 0,
    caloriesToSpend: 0,
    description: '',
    gender: '' as UserGender,
    video: '',
    special: false,
  });

  const handleCaloriesChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setFormData({...formData, caloriesToSpend: +event.target.value});
    if(CountCaloriesToSpend.Min <= formData.caloriesToSpend || CountCaloriesToSpend.Max >= formData.caloriesToSpend) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    if(event.target.files) {
      setFormData({...formData, video: event.target.files[0].name});
      setIsDisabled(true);
      return;
    } else {
      setIsDisabled(false);
      return;
    }
  };

  const handlePriceChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({...formData, price: +event.target.value});
    if(0 <= formData.price) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, description: event.target.value});
    if(WorkoutDescriptionLength.Min <= event.target.value.length || WorkoutDescriptionLength.Max >= event.target.value.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({...formData, name: event.target.value});
    if(NameLength.Min <= event.target.value.length || NameLength.Max >= event.target.value.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onSendWorkout = () => {

  };
  
  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Создание тренировки</title>
      </Helmet>
      <Header />
      <main>
        <div className="popup-form popup-form--create-training">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Создание тренировки</h1>
              </div>
              <div className="popup-form__form">
                <form 
                  method="get"
                  onSubmit={(evt: FormEvent<HTMLFormElement>) => {
                    evt.preventDefault();
                    onSendWorkout();
                  }}>
                  <div className="create-training">
                    <div className="create-training__wrapper">
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Название тренировки</h2>
                        <div className="custom-input create-training__input">
                          <label>
                            <span className="custom-input__wrapper">
                              <input 
                                onChange={handleNameChange}
                                value={formData.name}
                                type="text" 
                                name="training-name" />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Характеристики тренировки</h2>
                        <div className="create-training__info">
                          <div className={`custom-select ${isTypeOpened ? 'is-open' : 'custom-select--not-selected'} not-empty`}>
                            <span className="custom-select__label" style={{opacity: 1}}>Выберите тип тренировки</span>
                            <button
                              className="custom-select__button"
                              type="button"
                              aria-label="Выберите одну из опций"
                              onClick={() => setIsTypeOpened(true)}
                            >
                              <span className="custom-select__text">{typeToRussian(formData.type)}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                            {WORKOUT_TYPES.map((el) =>
                              (
                                <li
                                  key={el}
                                  role="option"
                                  tabIndex={0}
                                  className="custom-select__item"
                                  aria-selected={formData.type === workoutTypeToValue(el)}
                                  onClick={() => {
                                    setFormData({...formData, type: workoutTypeToValue(el) as WorkoutType});
                                    setIsTypeOpened(false);
                                  }}
                                >
                                  {el}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="custom-input custom-input--with-text-right">
                            <label>
                              <span className="custom-input__label">Сколько калорий потратим</span>
                              <span className="custom-input__wrapper">
                                <input 
                                  onChange={handleCaloriesChange}
                                  value={formData.caloriesToSpend}
                                  type="number" 
                                  name="calories" />
                                <span className="custom-input__text">ккал</span>
                              </span>
                            </label>
                          </div>
                          <div className={`custom-select ${isTimeOpened ? 'is-open' : 'custom-select--not-selected'} not-empty`}>
                            <span className="custom-select__label" style={{opacity: 1}}>Сколько времени потратим</span>
                            <button
                              className="custom-select__button"
                              type="button"
                              aria-label="Выберите одну из опций"
                              onClick={() => setIsTimeOpened(true)}
                            >
                              <span className="custom-select__text">{`${formData.timeOfTraining} мин`}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                            {WORKOUT_TIMES.map((el) =>
                              (
                                <li
                                  key={el}
                                  role="option"
                                  tabIndex={0}
                                  className="custom-select__item"
                                  aria-selected={formData.timeOfTraining === el}
                                  onClick={() => {
                                    setFormData({...formData, timeOfTraining: el as UserTime});
                                    setIsTimeOpened(false);
                                  }}
                                >
                                  {`${el} мин`}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="custom-input custom-input--with-text-right">
                            <label>
                              <span className="custom-input__label">Стоимость тренировки</span>
                              <span className="custom-input__wrapper">
                                <input 
                                  onChange={handlePriceChange}
                                  value={formData.price}
                                  type="number" 
                                  name="price" />
                                <span className="custom-input__text">₽</span>
                              </span>
                            </label>
                          </div>
                          <div className={`custom-select ${isLevelOpened ? 'is-open' : 'custom-select--not-selected'} not-empty`}>
                            <span className="custom-select__label" style={{opacity: 1}}>Выберите уровень тренировки</span>
                            <button
                              className="custom-select__button"
                              type="button"
                              aria-label="Выберите одну из опций"
                              onClick={() => setIsLevelOpened(true)}
                            >
                              <span className="custom-select__text">{levelToRussian(formData.level)}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                            {LEVELS.map((el) =>
                              (
                                <li
                                  key={el}
                                  role="option"
                                  tabIndex={0}
                                  className="custom-select__item"
                                  aria-selected={formData.level === levelToValue(el)}
                                  onClick={() => {
                                    setFormData({...formData, level: levelToValue(el)});
                                    setIsLevelOpened(false);
                                  }}
                                >
                                  {el}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="create-training__radio-wrapper">
                            <span className="create-training__label">Кому подойдет тренировка</span>
                            <br />
                            <div className="custom-toggle-radio create-training__radio">
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input
                                    onChange={() => setFormData({...formData, gender: UserGender.Male})}
                                    value={formData.gender}
                                    type="radio"
                                    name="gender"
                                    checked={formData.gender === UserGender.Male ? true : false} 
                                  />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Мужчинам</span>
                                </label>
                              </div>
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input
                                    onChange={() => setFormData({...formData, gender: UserGender.Female})}
                                    value={formData.gender}
                                    type="radio"
                                    name="gender"
                                    checked={formData.gender === UserGender.Female ? true : false}
                                  />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Женщинам</span>
                                </label>
                              </div>
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input
                                    onChange={() => setFormData({...formData, gender: UserGender.Indifferent})}
                                    value={formData.gender}
                                    type="radio"
                                    name="gender"
                                    checked={formData.gender === UserGender.Indifferent ? true : false} 
                                  />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Всем</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Описание тренировки</h2>
                        <div className="custom-textarea create-training__textarea">
                          <label>
                            <textarea
                              onChange={handleTextChange}
                              value={formData.description}
                              name="description"
                              placeholder=" "
                            >
                            </textarea>
                          </label>
                        </div>
                      </div>
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Загрузите видео-тренировку</h2>
                        <div className="drag-and-drop create-training__drag-and-drop">
                          <label>
                            <span className="drag-and-drop__label" tabIndex={TabIndex.index0}>Загрузите сюда файлы формата MOV, AVI или MP4
                              <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="#icon-import-video"></use>
                              </svg>
                            </span>
                            <input
                              onChange={handleFileChange}
                              type="file"
                              name="import"
                              tabIndex={TabIndex.indexMinus1}
                              accept=".mov, .avi, .mp4"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn create-training__button"
                      type="submit"
                      disabled={isDisabled && true}
                    >
                      Опубликовать
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default CreateTraning;
