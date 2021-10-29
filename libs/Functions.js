/*
    Branden's Functions/Vars Module
*/

//Internal Vars
global.debug = false;



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
    ServiceLogging: {
        FileService(message) {
            console.log(`[${vars.services.fileservice}] ${message}`.magenta)
        },
        WebService(message) {
            console.log(`[${vars.services.webservice}] ${message}`.green)
        },
        DebugService(message) {
            console.log(`[${vars.services.debugservice}] ${message}`)
        },
        SystemService(message) {
            console.log(`[${vars.services.systemservice}] ${message}`.magenta.dim)
        },
        GapiService(message) {
            console.log(`[${vars.services.gapiservice}] ${message}`.green)
        },
        ErrorService(message) {
            console.log(`[${vars.services.console.errorservice}] ${message}`.red)
        },
        LogService(message) {
            console.log(`[${vars.services.logservice}] ${message}`)
        }
    }
}

let vars = {
    services: {
        logservice: "LOGGING SERVICE",
        fileservice: "FILESYSTEM SERVICE",
        webservice: "HTTP SERVICE",
        debugservice: "DEBUG",
        errorservice: "FALLBACK HANDLER",
        gapiservice: "GOOGLE API",
        systemservice: "SYSTEM SERVICE"
    }
}

//Export categories
module.exports = {
    Maths,
    Logger,
    vars
}