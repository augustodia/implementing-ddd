import Address from "./Address";

class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _activate: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error('Name is required');
        }
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
    }

    changeName(name: string) {
        this._name = name;
    }

    changeAddress(address: Address) {
        this._address = address;
    }

    activate() {
        if (!this._address) {
            throw new Error('Adress is required for activate');
        }
        this._activate = true;
    }
}
