import EventEmitter from 'events';

const defaultOptions = {
  ttl: 5000,
  checkPeriod: 2000,
};

export default class Cache extends EventEmitter {
  constructor(options) {
    super();
    this.options = { ...defaultOptions, ...options };
    this.cacheObjects = {};
    this.interval = setInterval(() => {
      const currentTime = Date.now();
      Object.entries(this.cacheObjects).forEach((entry) => {
        const [key, value, createdDate] = [entry[0], entry[1].value, entry[1].createdAt];
        if (!(currentTime - createdDate > this.options.ttl)) {
          return;
        }
        delete this.cacheObjects[key];
        this.emit('expired', key, value);
      });
    }, this.options.checkPeriod);
  }
  has(key) {
    return this.cacheObjects.hasOwnProperty(key);
  }
  get(key) {
    if (!this.has(key)) {
      return null;
    }
    return this.cacheObjects[key].value;
  }
  set(key, value) {
    this.cacheObjects[key] = {
      value,
      createdAt: Date.now(),
    };
    this.emit('set', key, value);
  }
  del(key) {
    const res = delete this.cacheObjects[key];
    if (res) {
      this.emit('del', key, this.cacheObjects[key].value);
    }
    return res;
  }
  touch(key) {
    if (!this.has(key)) {
      return false;
    }
    this.cacheObjects[key].createdAt = Date.now();
    return true;
  }
  clear() {
    clearInterval(this.interval);
  }
}