abstract class CreditBase {

    _debt:number
    _currency:string

    abstract showInstalment() : void;

    get debt() : number {
        return this._debt 
    }

    set debt(value:number){
        this._debt=value
    }

    
    get currency() : string {
        return this._currency 
    }

    set currency(value:string){
        this._currency=value
    }
    

    get remainingDebt():string {
        return this.debt + " " + this.currency == "" ? "GBP" : this.currency;
    }

    public getTotalDebt(name : string):void {
        console.log("total debt of " + name + " is " + this.remainingDebt)
    }
}

class MortgageCredit extends CreditBase {

    /**
     * author:Gurhan
     */
    constructor(installment:number) {
        super();        
        
        this.installment = installment
    }

    _installment : number

    get installment() : number{
        return this._installment
    }
    set installment(value:number) {
        this._installment = value
    }

    showInstalment() : void {
        console.log("customers credit is : " + this.installment)
    }
}

let credit = new MortgageCredit(60);
credit.debt = 18
credit.currency = "USD"
console.log(credit.showInstalment());
console.log(credit.getTotalDebt("Ayşegül"));