const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; y < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
    y += 1
}
