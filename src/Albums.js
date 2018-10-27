import React from 'react';

// statelesss functional component to render album container
const Albums = props => {
  const { items } = props;
  const listItems = items.map((item, index) => {
    return (
      <ul>
        <li key={index}>{item.collectionName}</li>
        <img src={item.artworkUrl100} />
      </ul>
    );
  });
  return <div id="album-container">{listItems}</div>;
};

export default Albums;
