import localStore from './localStorageStore';

class RootStore{
    constructor(){
        this.storage = new localStore(this);
    }    
}

export default new RootStore();