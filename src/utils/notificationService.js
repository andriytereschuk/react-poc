import Notifications from 'react-notification-system-redux';
import Store from '../configureStore';

class NotificationService {
  showNotify() {
    // mocked param
    const param = {
      title: 'Hey, it\'s good to see you!',
      message: 'Now you can see how easy it is to use notifications in React!',
      position: 'tl',
      autoDismiss: 2,
      action: {
        label: 'Click me!!',
        callback: () => alert('clicked!')
      }
    };

    Store.dispatch(Notifications.error(param));
  }
}

export default NotificationService;
