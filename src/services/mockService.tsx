
export class MockService {
  private _someData: string = '';
  constructor(){
  }

  get someData(){
    return this._someData;
  }

  someFunction(){
    return 'i retun a srtring from a function';
  }

  someNumber(){
    return 'i retun a number from a function';
  }

  post(){
    return 'i am result of mock POST()';
  }

  put(){
    return 'i am result of mock PUT()';
  }

  patch(){
    return 'i am result of mock PATCH()';
  }

  get(){
    return 'i am result of mock GET()';
  }
}