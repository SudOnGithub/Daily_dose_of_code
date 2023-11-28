let housekeeper1={
    name: "Pooja",
    age: 29,
    experience: "9+ years",
    preference: "Single family"
}

function BellBoy(name, age, experience, preference) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.preference = preference;
}

let bellBoy1 = new BellBoy("Sudhir",25,9,"Single-family");
let bellBoy2 = new BellBoy("Lokesh",26,10,"Joint-family");