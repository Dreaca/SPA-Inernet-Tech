
export class StudentModel {
    constructor(ID, firstName, lastName, address, course) {
        this._ID = ID
        this._firstName = firstName
        this._lastName = lastName
        this._address = address
        this._course = course
    }
    get ID() {
        return this._ID
    }
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get address() {
        return this._address
    }
    get course() {
        return this._course
    }
    set ID(ID) {
        this._ID = ID
    }
    set firstName(firstName) {
        this._firstName = firstName
    }
    set lastName(lastName) {
        this._lastName = lastName
    }
    set address(address) {
        this._address = address
    }
    set course(course) {
        this._course = course
    }
}