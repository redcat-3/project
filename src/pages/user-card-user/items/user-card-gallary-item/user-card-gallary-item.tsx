import React from "react";

function UserCardGallaryItem(): JSX.Element {
  return (
    <li className="user-card__gallary-item">
      <img 
        src="img/content/user-coach-photo1.jpg" 
        srcSet="img/content/user-coach-photo1@2x.jpg 2x" 
        width="334" 
        height="573" 
        alt="photo1"
      />
    </li>
  );
}
export default React.memo(UserCardGallaryItem);
  