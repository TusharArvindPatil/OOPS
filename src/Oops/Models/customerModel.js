const _customerType = Symbol("_customerType");

export default class customerModel {

    get custmerType(){
        return this[_customerType];

    }

    set custmerType() {
       this[_customerType] = value;
    }


    




    toJSON() {
        return {
            customerType: this.customerType
        }
    }


}
