export default class Address {
    protected _address: string;
    private _zipcode: string;
    private _state: string;
    private _city: string;
    protected _country: string;

    constructor(address: string, zipcode: string, state: string, city: string, country: string) {
        this._address = address;
        this._zipcode = zipcode;
        this._state = state;
        this._city = city;
        this._country = country;

        this.validate();
    }
    private validate(): void {
        if (!this._country) {
            throw new Error(`Country not defined`);
        }

        if(!this._zipcode) {
            throw new Error(`Zipcode not defined`);
        }

        if(!this._city) {
            throw new Error(`City not defined`);
        }

        if(!this._state) {
            throw new Error(`State not defined`);
        }

        if (!this._address) {
            throw new Error(`Address not defined`);
        }

        if(!this._country) {
            throw new Error(`Country not defined`);
        }
    }
}