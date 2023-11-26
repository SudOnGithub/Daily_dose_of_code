function HouseKeeper(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function () {
        alert("The house cleaning is in progress!")
    }
}


let houseKeeper1 = new HouseKeeper("Yash", 31, true, ["English", "Hindi"]);

houseKeeper1.clean();

