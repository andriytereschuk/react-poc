import Notifications from 'react-notification-system-redux';
import Store from '../configureStore';

const notification = {
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

class NotificationService {
  showNotify() {
    Store.dispatch(Notifications.error(notification));
  }
}

export default NotificationService;
