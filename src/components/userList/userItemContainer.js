import { connect } from 'react-redux';
import { UserItem } from './userItem';

const mapStateToProps = (state, { user }) => {
  return {
    name: user.name,
    id: user.id,
    email: user.email
  };
};

// const mapDispatchToProps = dispatch => ({
//   selectUser(id) {
//     dispatch(selectUser(id));
//   }
// });

export const UserItemContainer = connect(mapStateToProps)(UserItem);
