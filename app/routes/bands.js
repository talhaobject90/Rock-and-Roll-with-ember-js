import Ember from 'ember';
function wait(promise, delay) {
  return new Ember.RSVP.Promise(function(resolve) {
    setTimeout(function() {
      promise.then(function(result) {
        resolve(result);
      });
    }, delay);
  });
}



export default Ember.Route.extend({
  model: function() {
    // var bands =  this.store.findAll('band');
    // return wait(bands, 3 * 1000);
    return this.store.findAll('band');
  },
  actions: {
    createBand: function() {
      var route = this,
      controller = this.get('controller');



      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function(){
        controller.set('name' , '');
        route.transitionTo('bands.band.songs',band);
      });
    },


    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },

  }
});
