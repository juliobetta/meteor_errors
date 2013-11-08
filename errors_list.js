Template.meteorErrors.helpers({
  errors: function() {
    return Errors.collection.find();
  }
});

// The rendered callback triggers once our template has been rendered in the browser.
// Inside the callback, this refers to the current template instance, and this.data
// lets us access the data of the object that is currently being rendered (in our case, an error).
Template.meteorError.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.collection.update(error._id, {$set: {seen: true}});
  });
};