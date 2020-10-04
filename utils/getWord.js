// getWord utility
module.exports.getWord = function(word) {
    if(!word || typeof word !== "string"){
        // default dummy word
        return "Weef weef weef! I love munchkins and corgis"
    }
    // otherwise, return defined word
    return word
}