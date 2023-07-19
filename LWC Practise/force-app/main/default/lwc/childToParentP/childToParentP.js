import { LightningElement } from 'lwc';

export default class ChildToParentP extends LightningElement {
    count=1;
    handleEvent(){
        this.count = this.count+1;
    }
}