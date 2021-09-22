const expierenceReasons = require("../../enum/expierence_reasons.json");

module.exports = {
  getIdExprierenceReason: (id) => {
    let filtered = Object.keys(expierenceReasons).filter(
      (a) => expierenceReasons[a] == id
    );
    if (filtered && filtered.length > 0) {
      return filtered[0];
    } else {
      return "UNKNOWN";
    }
  },
};
