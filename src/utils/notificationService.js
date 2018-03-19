import Notifications from 'react-notification-system-redux';
import Store from '../configureStore';

// const defaultParams = {

// };

class NotificationService {
  error() {
    // mocked param
    const param = {
      title: 'Hey, it\'s good to see you!',
      message: 'Now you can see how easy it is to use notifications in React!',
      position: 'tl',
      autoDismiss: 3,
      action: {
        label: 'Click me!!',
        callback: () => 'clicked!'
      }
    };

    Store.dispatch(Notifications.error(param));
  }
}

export default NotificationService;
