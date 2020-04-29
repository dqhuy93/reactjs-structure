import { connect } from 'react-redux';
import React, { Component } from 'react';
import { UserList } from './userList';
import { actGetUser } from '../../actions';
import { usersSelector } from '../../selectors/usersSelector';
class UserListContainer extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  render() {
    return <UserList users={this.props.users} />;
  }
}

function mapStateToProps(state) {
  return { users: usersSelector(state) };
}
function mapDispatchToProps(dispatch) {
  return {
    onGetUser: () => {
      dispatch(actGetUser());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
