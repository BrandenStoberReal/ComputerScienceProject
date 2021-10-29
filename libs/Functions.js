/*
    Branden's Functions/Vars Module
*/

//Internal Vars
global.debug = true;
const util = require('util');
const exec = util.promisify(require('child_process').exec); //????????

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
            console.log(`[${vars.services.systemservice}]`.magenta.bold + ` ${message}`)
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

let System = {
    async ExecuteCommand(cmd) {
        if (global.debug === true) {
            Logger.LogOutput("Executing the command \"" + cmd + "\"")
        }
        const {error, stdout, stderr} = await exec(cmd)
        let errors = []
        let outputs = []
        let stderrs = []
        let ReturnObject = {
            errors: "",
            outputs: "",
            stderrs: ""
        }
        if (error) {
            errors.push(error) 
            if (global.debug === true) {
                Logger.LogError(error)
            }
        }
        if (stderr) {
            stderrs.push(stderr)
            if (global.debug === true) {
                Logger.LogWarn("STDERR: " + stderr)
            }
        }
        if (stdout) {
            outputs.push(stdout)
            if (global.debug === true) {
                Logger.ServiceLogging.SystemService(stdout)
            }
        }
        if (global.debug === true) {
            Logger.LogOutput("Command has finished execution.")
        }
        ReturnObject.errors = errors.join("\n")
        ReturnObject.outputs = outputs.join("\n")
        ReturnObject.stderrs = stderrs.join("\n")
        return ReturnObject
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
    vars,
    System
}