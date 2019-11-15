
// var data = ["Afghanistan", "Pakistan", "Australia"];

var data = [
                ["Afghanistan", 1234, 4567], 
                ["Pakistan", 1234, 4567], 
                ["Australia", 1234, 5678]
            ]

data[0]    // ["Afghanistan", [1234, 4567]]
data[0][0] // "Afghanistan"
data[0][1] // 1234
data[0][2] // 4567


var data = [
                ["Afghanistan", [1234, 4567]], 
                ["Pakistan", [1234, 4567]], 
                ["Australia", [1234, 5678]]
            ]


data[0]    // ["Afghanistan", [1234, 4567]]
data[0][0] // "Afghanistan"
data[0][1] // [1234, 4567]

var data = {
                "Afghanistan" : [1234, 4567], 
                "Pakistan": [1234, 4567], 
                "Australia": [1234, 5678]
            }


data["Afghanistan"] // [1234, 4567]

var data = {
                "Afghanistan" : { 
                                  "coord" : [1234,4567],
                                  "vacc" : ["vacc_a", "vacc_b", ...],
                                }
            }


data["Afghanistan"] // [1234, 4567]
