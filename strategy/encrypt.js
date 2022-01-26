//module imports
const fs = require('fs')

//global functions
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

async function encrypt(str, key){
    let strategy = JSON.parse(fs.readFileSync('./strategy/encrypt.json'));
    var arr = []
    for (var i = 0; i < str.length; i++) {
        if (!str.charAt(i) || !str.charAt(i).trim()){
            arr.push('^ ')
        }
        else {
            arr.push(strategy[str.charAt(i)] * (key / 2))
        }
    }
    return {
        encryptedMessage: arr.toString()
    }
}
//arr.toString().split(",")
module.exports.encrypt = encrypt