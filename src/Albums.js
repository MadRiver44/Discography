import React from 'react';

// statelesss functional component to render album container
const Albums = props => {
  const { items } = props;
  console.log(props, items);
  const listItems = items.map((item, index) => <li key={index}>{item.collectionName}</li>);
  return <div id="album-container">{listItems}</div>;
};

export default Albums;
