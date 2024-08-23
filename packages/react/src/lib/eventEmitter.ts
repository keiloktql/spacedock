class EventEmitter {
  private eventTarget: EventTarget;

  constructor() {
    this.eventTarget = new EventTarget();
  }

  on(event: string, listener: EventListenerOrEventListenerObject) {
    this.eventTarget.addEventListener(event, listener);
  }

  off(event: string, listener: EventListenerOrEventListenerObject) {
    this.eventTarget.removeEventListener(event, listener);
  }

  emit(event: string, detail: any) {
    const customEvent = new CustomEvent(event, { detail });
    this.eventTarget.dispatchEvent(customEvent);
  }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;
