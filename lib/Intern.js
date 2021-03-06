const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, schoolInfo) {
        super(name, id, email);
        this.schoolInfo = schoolInfo;
    }

    getSchool() {
        return this.schoolInfo;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;