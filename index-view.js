var BaseView = require('./base-view');
var IndexCSS = require('./index.css');

var IndexView = BaseView.extend({
  template: require('./index.jade'),
});

module.exports = IndexView;