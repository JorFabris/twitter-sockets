const { v4: uuiV4 } = require('uuid');

class Twit {
    constructor(){
        this.id = uuiV4(); //Identificador unico
        this.user = {
            id:'',
            name: '',
            prime: false,
        };
        this.content = '';
        this.created_at = new Date();
    }
}

module.exports = Twit;