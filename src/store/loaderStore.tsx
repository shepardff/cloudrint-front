import { makeAutoObservable } from 'mobx';

interface Loader {
  active: boolean;
  msg?: string;
}

class LoaderStore {
  loader: Loader = {
    active: false,
    msg: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  active(active: boolean, msg?: string) {
    this.loader.active = active;
    this.loader.msg = msg;
  }

  msg(msg: string) {
    this.loader.msg = msg;
  }

  get(): Loader {
    return this.loader;
  }
}

export default new LoaderStore();
