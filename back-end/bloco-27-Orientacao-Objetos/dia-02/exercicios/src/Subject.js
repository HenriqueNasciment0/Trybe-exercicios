"use strict";
exports.__esModule = true;
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
        this.name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.valitadionName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype.valitadionName = function (value) {
        if (!value || value.length < 3)
            throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    };
    return Subject;
}());
exports["default"] = Subject;
