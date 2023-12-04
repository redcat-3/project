import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultiRangeSlider from '../multi-range-slider/multi-range-slider';
import { CountCaloriesToSpend, PriceSortValue, RangePriceValue, RangeRatingValue } from '../../constant';
import { WORKOUT_TYPES } from '../../types/workout-data';
import { workoutTypeToName } from '../../utils';

type GymCatalogFormProps = {
  types: string[]
};

function GymCatalogForm({types}: GymCatalogFormProps): JSX.Element {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [price, setPrice] = useState({ min: RangePriceValue.Min, max: RangePriceValue.Max });
  const [caloriesCount, setCaloriesCount] = useState({ min: CountCaloriesToSpend.Min, max: CountCaloriesToSpend.Max });
  const [rating, setRating] = useState({ min: RangeRatingValue.Min, max: RangeRatingValue.Max });
  const [currentTypes, setTypes] = useState(types);
  const [priceSort, setPriceSort] = useState(PriceSortValue.Desc);
  const onChangePrice = ({min, max}: {min: number, max: number}) => {
    setPrice({ min, max })
  };
  const onChangeCaloriesCount = ({min, max}: {min: number, max: number}) => {
    setCaloriesCount({ min, max })
  };
  const onChangeRating = ({min, max}: {min: number, max: number}) => {
    setRating({ min, max })
  };
  return (
    <div className="gym-catalog-form">
      <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
      <div className="gym-catalog-form__wrapper">
        <button
          className="btn-flat btn-flat--underlined gym-catalog-form__btnback"
          type="button"
          onClick={goBack}
        >
          <svg width="14" height="10" aria-hidden="true">
            <use xlinkHref="#arrow-left"></use>
          </svg>
          <span>Назад</span>
        </button>
        <h3 className="gym-catalog-form__title">Фильтры</h3>
        <form className="gym-catalog-form__form">
          <div className="gym-catalog-form__block gym-catalog-form__block--price">
            <h4 className="gym-catalog-form__block-title">Цена, ₽</h4>
            <MultiRangeSlider
              withValue={true}
              minMax={false}
              min={RangePriceValue.Min}
              max={RangePriceValue.Max}
              onChange={onChangePrice}
            ></MultiRangeSlider>
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--calories">
            <h4 className="gym-catalog-form__block-title">Калории</h4>
            <MultiRangeSlider
              withValue={true}
              minMax={false}
              min={CountCaloriesToSpend.Min}
              max={CountCaloriesToSpend.Max}
              onChange={onChangeCaloriesCount}
            ></MultiRangeSlider>
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--rating">
            <h4 className="gym-catalog-form__block-title">Рейтинг</h4>
            <MultiRangeSlider
              withValue={false}
              minMax={true}
              min={RangeRatingValue.Min}
              max={RangeRatingValue.Max}
              onChange={onChangeRating}
            ></MultiRangeSlider>
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--type">
            <h4 className="gym-catalog-form__block-title">Тип</h4>
            <ul className="gym-catalog-form__check-list">
              {WORKOUT_TYPES.map((item, index) => (
                <li className="gym-catalog-form__check-list-item" key={index}>                          
                  <div className="custom-toggle custom-toggle--checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value={item}
                        name="type"
                        onClick={() => {
                          const typesNew = currentTypes.slice();
                          const index = typesNew.indexOf(item);
                          if(index !== -1) {
                            typesNew.splice(index,1);
                          } else {
                            typesNew.push(item);
                          }
                          setTypes(typesNew);
                        }}
                        checked={currentTypes.includes(item)}
                      />
                      <span className="custom-toggle__icon">
                        <svg width="9" height="6" aria-hidden="true">
                          <use xlinkHref="#arrow-check"></use>
                        </svg>
                      </span>
                      <span className="custom-toggle__label">{workoutTypeToName(item)}</span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--sort">
            <h4 className="gym-catalog-form__title gym-catalog-form__title--sort">Сортировка</h4>
            <div className="btn-radio-sort gym-catalog-form__radio">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={priceSort === PriceSortValue.Asc}
                  onClick={() => setPriceSort(PriceSortValue.Asc)}
                /><span className="btn-radio-sort__label" >Дешевле</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={priceSort === PriceSortValue.Desc}
                  onClick={() => setPriceSort(PriceSortValue.Desc)}
                /><span className="btn-radio-sort__label">Дороже</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={priceSort === PriceSortValue.Free}
                  onClick={() => setPriceSort(PriceSortValue.Free)}
                /><span className="btn-radio-sort__label">Бесплатные</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default React.memo(GymCatalogForm);
