import React from "react";

function CheckListItem(): JSX.Element {
  return (
    <li  className="user-catalog-form__check-list-item">
      <div  className="custom-toggle custom-toggle--checkbox">
        <label>
          <input type="checkbox" value="user-agreement-1" name="user-agreement" checked />
          <span  className="custom-toggle__icon">
            <svg width="9" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-check"></use>
            </svg>
          </span>
          <span  className="custom-toggle__label">Автово</span>
        </label>
      </div>
    </li>
  );
}
export default React.memo(CheckListItem);
  