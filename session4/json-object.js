var pets = {
    
    cats : [
        {
            name: "Bart",
            age: 18,
            weight: 16,
        },
        {
            name: "Bart",
            age: 18,
            weight: 16
        }
    ]
};

var cats = pets.cats;
console.log(cats)

var bart = cats[0]
console.log(bart.name);
