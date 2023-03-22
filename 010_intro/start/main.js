//import cloneDeep from "lodash/cloneDeep.js" // node_modulesの中の同じパッケージ名を探す
const cloneDeep = require("lodash/cloneDeep");
const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);