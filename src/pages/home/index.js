import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetUser } from '../../actions/UserAction';
import { usersSelector } from '../../selectors/usersSelector';
import { Button } from 'antd';
import { eraseCookie } from '../../utils/helpers/cookie';
import { TOKEN_KEY } from '../../constants';

class HomePage extends Component {
  componentDidMount() {
    this.props.actGetUser();
  }
  render() {
    return (
      <div>
        <h1>List Users</h1>
        <ul>
          {this.props.users.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <Button
          onClick={() => {
            eraseCookie(TOKEN_KEY);
            this.props.history.push('login');
          }}
        >
          Logout
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: usersSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actGetUser: params => {
      dispatch(actGetUser(params));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
