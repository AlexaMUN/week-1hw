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

function checkBox(person)
{
    document.getElementById("checkBox").innerHTML = 'Your name is ' + hero.name;
    document.getElementById("checkBox").innerHTML += "Your health score is " + person.health + '<br />';
    document.getElementById("checkBox").innerHTML += "You've picked up a weapon called " + person.weapon.type + " with a damage score of " + person.weapon.damage + '<br />';
    document.getElementById("checkBox").innerHTML += 'In your inventory is:<br />'
    hero.inventory.forEach(function(item){
        document.getElementById("checkBox").innerHTML += 'a ' + item.type + ' with ' + item.damage + ' damage <br />'; 
    });      
}

document.getElementById('bag').onclick = function(){
    equipWeapon(hero);
    checkBox(hero);
};

document.getElementById('inn').onclick = function(){
    rest(hero);
    checkBox(hero);
};

document.getElementById('dagger').onclick = function(){
    pickUpItem(hero, dagger);
    checkBox(hero);
};