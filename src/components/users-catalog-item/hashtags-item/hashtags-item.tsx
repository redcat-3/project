import React from 'react';

function HashtagItem(): JSX.Element {
  return (
    <li className="thumbnail-user__hashtags-item">
      <div className="hashtag thumbnail-user__hashtag">
        <span>#стретчинг</span>
      </div>
    </li>
  );
}
export default React.memo(HashtagItem);
