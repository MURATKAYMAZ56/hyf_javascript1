//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."

let vehicles = ["motorbike", "caravan", "bike", "truck", "bus"];
let advertisement = "Amazing Joe's Garage, we service ";

let length = vehicles.length;
let part1 = vehicles.slice(0, length - 1);//seperate vehicles array till last index bus
let part2 = vehicles.slice(length - 1);// gets bus

advertisement += part1.join("s, ") + " and " + part2.join('es') + ".";//till bus puts "," in between  for the last index bus puts "."

console.log(advertisement);