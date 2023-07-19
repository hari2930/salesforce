import { LightningElement,wire,api } from 'lwc';
import {getFieldValue, getRecord} from 'lightning/uiRecordApi';
import {ACCOUNT_FIELD_NAME} from '@salesforce/schema/Account.Name';

export default class ChildToParent extends LightningElement {
    @api recordId;
    firstName='';
    handlechange(){
        this.dispatchEvent(new CustomEvent('countIncrease'));
    }
    handleChangeName(event){
                  this.firstName =event.target.value;

    }
    @wire(getRecord,{recordId:'$recordId' , fields:[ACCOUNT_FIELD_NAME]})
    record;

    get name(){
        return getFieldValue(this.record.data,ACCOUNT_FIELD_NAME);
    }
}