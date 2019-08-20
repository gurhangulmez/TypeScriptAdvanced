interface Customer {

    name : string
    surname : string
    age : number
}

interface IStaff {

    name : string
    surname : string
    age : number

    saveStaff() : boolean;
}

class CRM implements IStaff {

    name: string;    
    surname: string;
    age: number;
    saveStaff(): boolean {
        throw new Error("Method not implemented.");
    }


}

function saveCustomer(customer : Customer) : void {

    console.log(customer.name + " " + customer.surname + " is " + customer.age + " years old.")
}

saveCustomer({name:"Gürhan", surname:"Gülmez", age:17})
