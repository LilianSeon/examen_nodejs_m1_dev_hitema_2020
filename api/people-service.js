const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        let perId = this.peoples.indexOf(this.peoples.filter(person => person.id = id))
		this.peoples[perId] = people;
		fs.writeFile(__dirname + '/people.json', JSON.stringify(this.peoples), function writeJSON(err) {
            if (err) return console.log(err);
		});
    }
    
    getPeople(filters = null) {
        // To be implemented!
		if(filters === null){
			return this.peoples;
		}else{
			return this.peoples.filter(filters);
		}
    }
}
