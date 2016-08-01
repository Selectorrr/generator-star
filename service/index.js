var generators = require('yeoman-generator');
var _ = require('lodash');
module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', {type: String, required: true});
        this.nameCamel = _.camelCase(this.name);
        this.nameKebab = _.kebabCase(this.nameCamel);
        this.nameCap = _.capitalize(this.nameCamel);
    },
    writing: function () {
        var that = this;
        this.fs.copyTpl(
            this.templatePath('service.js'),
            this.destinationPath(that.nameKebab + '/' + that.nameKebab + '.service.js'),
            {nameCamel: that.nameCamel, nameKebab: that.nameKebab, nameCap: that.nameCap}
        );
        this.fs.copyTpl(
            this.templatePath('module.js'),
            this.destinationPath(that.nameKebab + '/' + that.nameKebab + '.module.js'),
            {nameCamel: that.nameCamel, nameKebab: that.nameKebab, nameCap: that.nameCap}
        );
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(that.nameKebab + '/index.js'),
            {nameCamel: that.nameCamel, nameKebab: that.nameKebab, nameCap: that.nameCap}
        );
        this.fs.copyTpl(
            this.templatePath('readme.md'),
            this.destinationPath(that.nameKebab + '/readme.md'),
            {nameCamel: that.nameCamel, nameKebab: that.nameKebab, nameCap: that.nameCap}
        );
    }
});