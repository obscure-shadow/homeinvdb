
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
         let Representation =""
         Representation+= `<div>${member}</div>`
    })

    console.log(HTMLRepresentation)

document.querySelector(".show-info").innerHTML = HTMLRepresentation