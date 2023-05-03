const driver1 = {
    name: 'The Pepe',
    car: 'Honda Civic type R',
    driving: 'is on the run',
    driverComplete(){
        return this.name + " drive a " + this.car + " and " + this.driving; 
    }
}
console.log(driver1.driverComplete());