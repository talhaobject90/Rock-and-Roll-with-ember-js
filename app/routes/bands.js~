import Ember from 'ember';




export default Ember.Route.extend({
  model: function() {
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
