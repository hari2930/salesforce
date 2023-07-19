import { LightningElement,api,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountList.getAccList';

export default class WireWithProperty extends LightningElement {
    
    @wire(getAccountList)
    accounts;
    
}