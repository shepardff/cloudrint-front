import { makeAutoObservable } from 'mobx';

interface Form {
  [key: string]: string;
}

class PhotoFormStore {
  form: Form = {
    page: 'Матовая',
    size: '10x15',
    frame: 'Туалетная',
    framing: '20x25',
  };

  constructor() {
    makeAutoObservable(this);
  }

  select(item: string, value: string) {
    this.form[item] = value;
  }

  get(): Form {
    return this.form;
  }
}

export default new PhotoFormStore();
