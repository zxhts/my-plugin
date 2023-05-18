module.exports = class MyPlugin {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    console.log('my plugin is executed');
    console.log('my plugin option', this.option);
  }
};
