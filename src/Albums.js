import React from 'react';

// statelesss functional component to render album item-container
const Albums = props => {
  const { items } = props;
  const listItems = items.map((item, index) => (
    <ul className="item-container">
      <img
        key={item.collectionName + index.toString()}
        srcSet={item.artworkUrl100.replace('100x100', '300x300')}
        alt={item.collectionName}
      />
      <li key={item.artistViewUrl + index.toString()}>{item.collectionName}</li>
      <li key={item.releaseDate + index.toString()}>
        Release Date:
        {item.releaseDate.split(/T\d+:\d+:\d+Z/)}
      </li>
    </ul>
  ));
  return <div id="album-container">{listItems}</div>;
};

export default Albums;

