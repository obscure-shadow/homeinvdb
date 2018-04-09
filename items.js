// home storage item database project

// Define the database as an object
const HomeInventoryDatabase = {
    "crafts": [],
    "furnature": [],
    "electronics": [],
    "games": [],
    "music": []
}

// The ink well is a craft data item
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}
//push to db
HomeInventoryDatabase.crafts.push(vintageInkwell)

// The writing desk is a furniture data item
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

HomeInventoryDatabase.furnature.push(writingDesk)

const coutch = {
    name: "sectional coutch",
    location: "living room",
    description: "coutch in livingroom. christmas present to us."
}

HomeInventoryDatabase.furnature.push(coutch)

const bed = {
    name: "bed",
    location: "bedroom",
    description: "it's comfy"
}
HomeInventoryDatabase.furnature.push(bed)

const television = {
    name: "tv",
    location: "living room",
    description: "lg lcd tv"
}
HomeInventoryDatabase.electronics.push(television)

const goban ={
    name:"Goban",
    location: "Closet",
    description: "Go Board and Stones set. made of bamboo, sounds nice."
}
HomeInventoryDatabase.games.push(goban)

const needles = {
    name:"knitting needles",
    location:"downstairs closet",
    description:"set of knitting needles"
}
HomeInventoryDatabase.crafts.push(needles)

const crystals = {
    name: "chrystal shrine",
    location: "livingrom shrine",
    description: "lots of pretty rocks"
}
HomeInventoryDatabase.furnature.push(crystals)

const candles ={
    name: "candles",
    location: "livingroom shrine",
    description: "lots of pretty candles"
}
HomeInventoryDatabase.crafts.push(candles)

const guitar = {
    name:"guitar",
    location:"downstairs shelf",
    description:"classical style guitar from grandmother"
}

HomeInventoryDatabase.music.push(guitar)

console.log(HomeInventoryDatabase)

//save db to local storage
const savedb = dbname => {
localStorage.setItem("home inventory", JSON.stringify(HomeInventoryDatabase))
}
savedb(HomeInventoryDatabase)
//load db from local storage
const loadDb = localsoragekey => {
    localStorage.getItem(JSON.parse(localsoragekey))

}