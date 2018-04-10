const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = possibleNames[Math.floor(Math.random() * 7)]
    return `${randomizer} the llama`
}
//nameMaker = llamaNamer()
console.log(llamaNamer())

    
    
    
