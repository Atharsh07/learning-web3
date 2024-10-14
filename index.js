// the assigement is that the hashed value of an string should start with 00000 , have to find out the string and full
// hashed hash

const crypto = require('crypto')

function checkthezero(prefix) {
    let input = 0
    while (true) {
        let inputstr = "100xdevs" + input.toString()
        let hash = crypto.createHash('sha256').update(inputstr).digest('hex')
        if(hash.startsWith(prefix)){
            return {input:inputstr, hash:hash}
        }
        input++
    }
}
const result = checkthezero('00000')
console.log(`Input: ${result.input}`);
console.log(`Input: ${result.hash}`);
