let drive = () => {

    console.log("Driving a car");
    
};

let breaks = () => {

    console.log('Stopping the car');
    
}

let startEngine = () => {

    console.log('Starting the car');
    
}

module.exports.drive = drive;
module.exports.startEngine = startEngine;
module.exports.breaks = breaks;
//module.exports.ride = drive;