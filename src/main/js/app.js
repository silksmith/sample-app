goog.provide("sample.App");
/**
 *
 * @constructor
 * @param {string} name
 */
sample.App = function (name) {
  /**
   *
   * @type {string}
   */
  this.name = name;
};

sample.App.prototype.run = function () {

  jQuery(function ($) {
    $("<h1>").text(this.name).appendTo(document.body);
  }.bind(this));

};
sample.App.prototype.getName = function(){
  return this.name;
};