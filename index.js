/*
    Branden's AP Computer Science Project
        2021, All Rights Reserved
            MIT Licence
*/

//Libraries
let Functions = require("./libs/Functions") // BrandenLib v2
let Colors = require("colors") // Console Colorings
let Axios = require("axios")
let AppInfo = require("./package.json")

console.log(`Application Starting! Version v${AppInfo.version}`.blue)
Functions.System.ExecuteCommand("ping google.com") 