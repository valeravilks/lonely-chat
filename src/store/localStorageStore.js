import {observable, computed, action} from 'mobx';

export default class{
    @action nameCheck = () => {
        let name = sessionStorage.getItem('name');

        if(name){
            return false;
        } else {
            return true;
        }
    }
}