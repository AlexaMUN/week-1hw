var hero = {
    name: '',
    inventory: Array(),
    health: 10,
    weapon: {
        type: 'pen',
        damage: 2,
    },
    heroic: false
};

var dagger = {
    type: 'dagger',
    damage: 2
};

var name = prompt("Please enter your name", "PlayerOne");
alert("Your name is now " + name);

function rest(person)
{
    if (person.health == 10)
    {
       window.alert('You\'re already in tip-top shape!');
        return person;
    }

    person.health = 10;

    return person;

}



function pickUpItem(person, weapon)
{
    person.inventory.push(weapon);

    return person;
}


function equipWeapon(person)
{
    if (person.inventory.length == 0 || person.inventory[0] == person.weapon)
    {
        return person;
    }
    
   else person.weapon = person.inventory[0];

    return person;
}
// function displayStats(person){

// prompt ("Name " + person.name;
// var currentHealth = "Your current health level is " + person.health;
// var currentWeapon = "Your current weapon is " + person.weapon;
// var currentWeaponDamage = "Your current weapon damage level is " + person.weapon.damage;}


// prompt("Your current stats are", displayStats(hero));

window.alert("Name " + hero.name);