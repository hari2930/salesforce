import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    mydata={Name:'Harish',Phone:'123'};
    handleEvent(){
        this.count=this.count+1;
        
    }
    onchange(){
        this.template.querySelector('c-child').refresh();
    }
}