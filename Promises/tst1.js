//const promise = require('promise');

let p1 = new Promise((resolve,reject) =>{

    reject('State => Reject');

}).then(console.log('Promise Resolved'))
.catch(console.log('Error'));