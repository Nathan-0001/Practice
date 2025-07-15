const lunches = [];
function addLunchToEnd(lunches, str){
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`)
    return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza" , "Burgers"], "Salads"));

function addLunchToStart(lunches, str){
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`)
    return lunches;
}
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

function removeLastLunch(lunches){
    if(lunches.length === 0){
        return "No lunches to remove.";
    } else {
        let removed = lunches[lunches.length - 1];
        lunches.pop();
        return `${removed} removed from the end of the lunch menu.`;
    }
}
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch([]));

function removeFirstLunch(lunches){
    if(lunches.length === 0){
        return "No lunches to remove.";
    } else {
        let removed = lunches[0];
        lunches.shift();
        return `${removed} removed from the start of the lunch menu.`;
    }
}
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch([]))


function getRandomLunch(lunches){
    if(lunches.length === 0){
        return "No lunches available.";
    } else {
    let randomNum = Math.floor(Math.random() * lunches.length);
    let randomElement = lunches[randomNum];
    return `Randomly selected lunch: ${randomElement}`;
    } 
}
getRandomLunch(["Pizza", "Burgers", "Salads"]);

function showLunchMenu(lunches){
    if (lunches.length === 0){
        return "The menu is empty.";
    } else {
        let [lunch1, lunch2, ...rest] = lunches;
        return `Menu Items: ${lunch1}, ${lunch2}, ${rest.join(', ')}`;
    }   
}    
console.log(showLunchMenu(["Greens", "Corns", "Beans"]))
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]))
