/*
    Branden's Functions Module
*/
let Maths = {
    RandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) // Math is not mine, I am not a mathematician
    }
}
  
module.exports = {
    Maths
}