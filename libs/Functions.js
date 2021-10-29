/*
    Branden's Functions/Vars Module
*/

let Maths = {
    RandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) // Math is not mine, I am not a mathematician
    }
}

let Logger = {
    LogOutput(message) {
        console.log("[INFO] " + message)
    },
    LogWarn(message) {
        console.log("[WARN] ".yellow + message.yellow)
    },
    LogError(message) {
        console.log("[ERROR] ".red + message.red)
    },
    LogServiceMessage(service, message) {
        console.log(`[${service}] ${message}`)
    }
}

let vars = {
    services = {
        logservice: "LOGGING SERVICE",
        fileservice: "FILESYSTEM SERVICE",
        webservice: "HTTP SERVICE",
        debugservice: "DEBUG",
        errorservice: "FALLBACK HANDLER",
        gapiservice: "GOOGLE API"
    }
}

//Export categories
module.exports = {
    Maths,
    Logger,
    vars
}