interface PaymentBase {
    name:string
}

class CreditCard implements PaymentBase{

    constructor(param : string ) {
        
        this.name = param     
    }

    name: string;
}

class Cash implements PaymentBase {

    constructor(param : string ) {
        
        this.name = param     
    }
    name: string;
}

class MoneyTaker<T extends PaymentBase> {

    TakeMoney(param:CreditCard):void {
        console.log("Money has taken by :" + param.name);   
    }
}

let money = new MoneyTaker<CreditCard>();
money.TakeMoney(new CreditCard("credit card payment"))