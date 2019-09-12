import {observable, computed, action} from 'mobx';

export default class{
    @observable message = [];
    @observable name = '';

    @computed get messageUpdate(){
        let storageMess = localStorage.getItem("message");
        this.message = JSON.parse(storageMess);
    }

    @action loadStore(){
        this.name = sessionStorage.getItem('name');
        this.message = JSON.parse(localStorage.getItem("message"));
    }

    @action setName = (name) => {
        sessionStorage.setItem('name', name);
        this.name = name;
    };

    @action setMessage = (message) => {
        this.message.push({name: this.name, message});
        localStorage.setItem("message", JSON.stringify(this.message));
    }




}