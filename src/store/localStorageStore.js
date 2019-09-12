import {observable, computed, action} from 'mobx';

export default class{
    @observable name = '';

    @action loadName(){
        this.name = sessionStorage.getItem('name');
    }

    @action setName = (name) => {
        sessionStorage.setItem('name', name);
        this.name = name;
    };
}