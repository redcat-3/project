import React from 'react';

function TrainingDiaryCell(): JSX.Element {
  return (
    <td className="training-diary__cell">
      <div className="training-diary__data">
        <span>620</span>
      </div>
    </td>
  );
}
export default React.memo(TrainingDiaryCell);
