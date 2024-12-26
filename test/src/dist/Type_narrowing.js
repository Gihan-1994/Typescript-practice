"use strict";
const text = "word";
console.log(text);
class IdBox {
    constructor(value1, value2) {
        this.P_id = value2;
        this.name = value1;
    }
    getId() {
        return this.P_id.id;
    }
    getName() {
        return this.name;
    }
}
const idbox = new IdBox("Gihan", { id: 4 });
console.log(idbox.getId());
console.log(idbox.getName());
//# sourceMappingURL=Type_narrowing.js.map