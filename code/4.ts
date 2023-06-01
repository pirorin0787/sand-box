class Member{
    
    strength :number
    constructor(strength:number){
        this.strength = strength
    }

    power = () => {
        return 5 + this.strength
    }
    weaponAttack = () => {
        return 7
    }
    speed = () => {
        return 3
    }
}

class Enemy{
    defence= () => {
        return 3
    }
}

const member = new Member(5)
const enemy = new Enemy()

const damage = (addPower:number) => {
    let tmp:number = member.power() + member.weaponAttack()
    // const tmp:number = member.power() + member.weaponAttack()
    tmp = (tmp * (1 + member.speed()/100))
    tmp = tmp - (enemy.defence()/2)
    addPower = addPower + 5
    tmp = tmp + addPower
    return tmp
}
console.log(damage(5))
const addDamage = 5
console.log(damage(addDamage))

let mamberA = new Member(3)
let memberB = new Member(3)
