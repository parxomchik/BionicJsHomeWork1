var tree = {};
tree.decorate = function () {
    console.log('Make sure the tree won\'t fall');
};
tree.getDecorator = function (deco) {
    tree[deco].prototype = this;
    return new tree[deco];
};
tree.RedBalls = function () {
    this.decorate = function () {
        this.RedBalls.prototype.decorate();
        console.log('Put on some red balls');
    }
};
tree.BlueBalls = function () {
    this.decorate = function () {
        this.BlueBalls.prototype.decorate();
        console.log('Add blue balls');
    }
};
tree.Angel = function () {
    this.decorate = function () {
        this.Angel.prototype.decorate();
        console.log('An angel on the top');
    }
};
tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('Angel');
tree = tree.getDecorator('RedBalls');
tree.decorate();
