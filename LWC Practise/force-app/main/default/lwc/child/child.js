import { LightningElement , api} from 'lwc';
 
export default class Child extends LightningElement {
    @api mydata;
    
    handleChange(){
        this.dispatchEvent(new CustomEvent('increaseCount'));
    }
    timeStamp = new Date();
       @api refresh(){
        this.timeStamp = new Date();
       }
}