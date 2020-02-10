
class Timer {

  constructor({ interval = 1000, }) {
    this.now = 0;
    this.interval = interval;
  }

  tick = () => {
    setTimeout(() => {
      if (this.canTick()) this.getEvent(Timer.Events.TICK)(++this.now);
      this.tick()
    }, this.interval)
  }

  subscribe = (nameEvent, callback) => {
    this[nameEvent] = callback;
    return this
  }

  getEvent = event => {
    const callbackEvent = this[event] && typeof this[event] === 'function'
      ? this[event]
      : () => true

    return (data) => {
      const eventData = { data, event }
      callbackEvent(eventData)
    }
  }

  canTick = () => !this.isStoped() && !this.isPaused()

  setInterval = (newInterval) => {
    this.interval = newInterval <= 0 ? 1 : newInterval;
    this.getEvent(Timer.Events.NEW_INTERVAL)(this.interval)
  }

  isStoped = () => !this.now && this.paused
  stop = () => {
    this.now = 0;
    this.paused = true;
    this.getEvent(Timer.Events.TICK)(this.now)
    this.getEvent(Timer.Events.STOP)(this.paused && !(this.now))
  }

  isPaused = () => !!(this.now && this.paused)
  pause = () => {
    this.paused = true
    this.getEvent(Timer.Events.PAUSE)(this.paused)
  }

  reanude = () => {
    this.paused = false;
    this.getEvent(Timer.Events.PAUSE)(this.paused)
  }

  run = () => {
    this.reanude();
    this.tick()
    return this
  };

}

Timer.Events = {
  TICK: 'onTick',
  NEW_INTERVAL: 'onChangeInterval',
  STOP: 'onStop',
  PAUSE: 'onPause',
}


export {
  Timer
}