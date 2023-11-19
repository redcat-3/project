import React from "react";

function CheckListItem(): JSX.Element {
  return (
    <li className="gym-catalog-form__check-list-item">
      <div className="custom-toggle custom-toggle--checkbox">
        <label>
          <input type="checkbox" value="type-1" name="type" />
            <span className="custom-toggle__icon">
              <svg width="9" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-check"></use>
              </svg>
            </span>
            <span className="custom-toggle__label">йога</span>
        </label>
      </div>
    </li>
  );
}
export default React.memo(CheckListItem);
  