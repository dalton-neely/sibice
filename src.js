const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class InputObj {
    constructor(){
        this.current = 1
        this.t = 0
    }
    set total(x){
        this.t = parseInt(x,10)
    }
    get total(){
        return this.t
    }
    increment(){
        this.current++
    }
    doContinue(){
        return this.current <= this.total?true:false
    }
}

class MatchBox {
    constructor(){
        this.w = 0
        this.h = 0
    }
    set height(x){
        this.h = parseInt(x,10)
    }
    set width(x){
        this.w = parseInt(x,10)
    }
    get max(){
        return Math.sqrt(Math.pow(this.w, 2) + Math.pow(this.h, 2))
    }
}

const matchBox = new MatchBox()
const inputObj = new InputObj()

rl.on('line', input => {
    if(inputObj.total === 0){
        const nums = input.split(' ')
        inputObj.total = nums[0]
        matchBox.width = nums[1]
        matchBox.height = nums[2]
    }else{
        if(inputObj.doContinue()){
            if(parseInt(input,10) <= matchBox.max)
                console.log('DA')
            else
                console.log('NE')
            inputObj.increment()
        }else{
            rl.close()
        }
    }
})