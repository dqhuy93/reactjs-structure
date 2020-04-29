import React from 'react';
import { UserItemContainer } from './userItemContainer';

export const UserList = ({ users }) => (
  <div>
    <div>
      <ul>
        {users.map(user => (
          <UserItemContainer key={user.id} user={user} />
        ))}
      </ul>
    </div>
  </div>
);
