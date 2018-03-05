name = 'World'
fs = require('fs')

try {
    obj = JSON.parse(fs.readFileSync('/dev/stdin').toString())

    if (obj.name != ""){
        name = obj.name;
    }
}
catch(e){
}

var message = `Hello ${name}`
var output = {};
output.message = message;
console.log(JSON.stringify(output))
