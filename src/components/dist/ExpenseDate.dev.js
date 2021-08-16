"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ExpenseDate(props) {
  var day = props.date.toLocaleString("en-US", {
    day: '2-digit'
  });
  var month = props.date.toLocaleString("en-US", {
    month: "long"
  });
  var year = props.date.getFullYear();
}

var _default = ExpenseDate;
exports["default"] = _default;