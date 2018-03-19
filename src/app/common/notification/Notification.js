import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

function Notification(props) {
  const { notifications } = props;

  const style = {
    NotificationItem: {
      DefaultStyle: {
        margin: '10px 5px 2px 1px'
      },
      success: {
        color: 'green'
      }
    }
  };

  return (
    <Notifications
      notifications={notifications}
      style={style}
    />
  );
}

Notification.contextTypes = {
  store: PropTypes.object
};

Notification.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(state => ({ notifications: state.notifications }))(Notification);
