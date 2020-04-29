import React from 'react';

export const UserItem = ({ id, name, email }) => (
  <li key={id}>
    <strong>{name}</strong>
    <div>{email}</div>
    <br />
  </li>
);
