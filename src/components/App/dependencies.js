import DumbService from '../../utils/dumbService';
import NotificationService from '../../utils/notificationService';

const dependencies = {
  data: {},
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    this.data[key] = value;
  }
};

export function registerDependencies() {
  dependencies.register('dumbService', new DumbService());
  dependencies.register('notificationService', new NotificationService());
}

export default dependencies;
