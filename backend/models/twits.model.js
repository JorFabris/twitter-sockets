const Twit = require('./twit.model');


class Twits {
        constructor(){
            this.twits = [];
        }

        addTwit(twit = new Twit()){
            this.twits.unshift(twit);
        }

        getTwits(){
            return this.twits;
        }

        deleteTwit(id = ''){
            this.twits = this.twits.filter( b => b.id !== id );
            return this.twits;
        }
}

module.exports = Twits;