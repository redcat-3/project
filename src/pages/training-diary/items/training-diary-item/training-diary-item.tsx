import React from "react";

function TrainingDiaryItem(): JSX.Element {
  return (
    <li className="training-diary__item"><span>Тренировка 1</span>
      <ul className="training-diary__sublist">
        <li className="training-diary__subitem"><span>Калории</span></li>
        <li className="training-diary__subitem"><span>Время</span></li>
      </ul>
    </li>
  );
}
export default React.memo(TrainingDiaryItem);
  