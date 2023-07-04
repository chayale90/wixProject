import React from 'react';

const TicketItem = ({ item }) => {
  return (
    <div className='item'>
      <h1>{item.title}</h1>
      <span>{item.content}</span>
      <h5>{item.userEmail}</h5>
      <div>{item.creationTime}</div>
      <div>{item.labels}</div>
    </div>
  );
};

export default TicketItem;
