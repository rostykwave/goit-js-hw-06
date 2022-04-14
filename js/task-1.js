class Hero{
    constructor({name = 'hero', xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду`);
        this.xp += amount;
    }
}

class Warrior extends Hero{
    constructor({weapon, ...restProps} = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    atack() {
        console.log(`${this.name} атакує, використовуючи ${this.weapon}!`);
    }
}


////Berser
class Berserk extends Warrior{
    constructor({warcry, ...restProps} = {}) {
        super(restProps);

        this.warcry = warcry;
    }
};



////Mage
class Mage extends Hero{
    // constructor({name, xp, spells = []} = {}) {
    constructor({spells, ...restProps} = {}) {
        // super(name, xp);
        super(restProps);
        
        this.spells = spells;
    }

    casst() {
        console.log(`${this.name} щось сповіщає`);
    }

};


////// Mango
const mango = new Warrior({name: 'Манго', xp: 1000, weapon: 'Джавелін'})

console.log(mango);

mango.atack();

mango.gainXp(1000);

//////Poly
const poly = new Mage({name: 'Полі',  xp: 2000, spells: ['уєє']});

console.log(poly);
poly.casst();
poly.gainXp(500);

//////Ajax
const ajax = new Berserk({
    name: 'Ajax',
    xp: 3000,
    weapon: 'axe',
    warcry: 'waaaaaaaahh',
});

console.log(ajax);
ajax.atack();
ajax.gainXp(26);



///Для співбесіди (прототипування)
// console.log('mango.__proto__ === Warrior.prototype', mango.__proto__ === Warrior.prototype);
// console.log('Object.getPrototypeOf(mango) === Warrior.prototype',Object.getPrototypeOf(mango) === Warrior.prototype);//більш правильний запис з точки зору звертання
// console.log('Warrior.prototype.__proto__ === Hero.prototype',Warrior.prototype.__proto__ === Hero.prototype);

// console.log('console.log(Hero.prototype);', Hero.prototype);

// console.log('Hero.prototype.__proto__ === Object.prototype',Hero.prototype.__proto__ === Object.prototype);
