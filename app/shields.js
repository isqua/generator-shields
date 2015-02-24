var util = require('util');
var shieldList = require('./shields-list');

function Shields() {
    this._shields = shieldList.shields;
    this._items = shieldList.items;
    this._aliases = [];
    this._text = [];
    this._ext = 'svg';
    this._style = 'flat';
}

Shields.prototype.getShieldImage = function (shieldName, info) {
    return util.format(
        'https://img.shields.io/%s.%s?style=%s',
        this._format(this._shields[shieldName].path, info), this._ext, this._style
    );
};

Shields.prototype.setExtension = function (ext) {
    this._ext = ext;
};

Shields.prototype.setStyle = function (style) {
    this._style = style;
};

Shields.prototype.getShieldImageAlias = function (shieldName, info) {
    return util.format('[%s-image]: %s', shieldName, this.getShieldImage(shieldName, info));
};

Shields.prototype.getShieldLink = function (shieldName, info) {
    return this._format(this._shields[shieldName].link, info);
};

Shields.prototype.getShieldLinkAlias = function (shieldName, info) {
    return util.format('[%s-link]: %s', shieldName, this._format(this._shields[shieldName].link, info));
};

Shields.prototype.getShieldText = function (shieldName) {
    var shield = this._shields[shieldName];

    return util.format('[![%s][%s-image]][%s-link]', shield.text, shieldName, shieldName);
};

Shields.prototype.getShieldMessage = function (shieldName) {
    return this._shields[shieldName].message;
};

Shields.prototype.getItems = function () {
    return this._items;
};

Shields.prototype.use = function (shields, info) {
    shields.forEach(function (shieldName) {
        this._text.push(this.getShieldText(shieldName));
        this._aliases.push(this.getShieldImageAlias(shieldName, info));
        this._aliases.push(this.getShieldLinkAlias(shieldName, info));
    }.bind(this));

    return this;
};

Shields.prototype.getText = function () {
    return this._text;
};

Shields.prototype.getAliases = function () {
    return this._aliases;
};

Shields.prototype._format = function (str, params) {
    return str.replace(/{([^{}]+)}/, function (str, match) {
        return params[match];
    });
};

module.exports = Shields;
