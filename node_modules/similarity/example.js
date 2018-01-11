var similarity = require("./")

similarity("food", "food") // 1
similarity("food", "fool") // 0.75
similarity("ding", "plow") // 0
similarity("chicken", "chick") // 0.714285714
similarity("es6-shim", "es6 shim") // 0.875
