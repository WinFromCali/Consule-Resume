var name = ["erwin blanco"];
var careerField = {
    position: "Account Executive",
    myDescription: "Learning a new skill for a more meaningful future"
};

var interests = [
    "My Interests:",
    "* Coding",
    "* Monser Hunter World",
    "* Puzzle Solving",
    "* Collecting Funkos"
];

var companyName = ["GardaWorld", "Konica Minolta"]
var jobTitle = ["Account Executive", "Admin Ops Specialist"]
var jobDescription = ["Sell Armored Truck Services", "Processed paperwork and assist customers"]

var skillName = [
    "My Skills",
    "Play Trumpet",
    "Road Cyclist",
    "Tie a Tie",
    "Whistle",
];

console.log(name.toUpperCase());

for (let i in careerField) {
    console.log(careerField[i]);
};

for (var i = 0; i < interests.length; i++) {
    console.log(interests[i])
};

displayPosition("GardaWorld", "Account Executive", "sell Armored Truck Services")
displayPosition("Konica Minolta", "Admin Ops Specialist", "processed paperwork and assist customers")

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log(jobTitle, " at ", companyName, " where I ", jobDescription)
};

displaySkill("My Skills:sss", false)
displaySkill("Play Trumpet", true)
displaySkill("Road Cyclist", false)
displaySkill("Tie a Tie", true)
displaySkill("Whistle", false)

function displaySkill(skillName, cool) {
    if (cool == true) {
        console.log("*Bam: " + skillName);
    } else if (cool == false) {
        console.log(skillName)
    }
};
