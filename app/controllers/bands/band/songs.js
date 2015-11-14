import Ember from 'ember';

export default Ember.Controller.extend({


  songCreationStarted: false,


  canCreateSong: Ember.computed('songCreationStarted',
  'model.songs.length', function() {
    return this.get('songCreationStarted') ||
    this.get('model.songs.length');
  }),

  noSongs: Ember.computed('model.songs.length', function() {
    return this.get('model.songs.length') === 0;
  }),

  title: '',

  isSongAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),

  actions: {

    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },

    updateRating: function(params) {
      var song = params.item,
      rating = params.rating;
      song.set('rating', rating);
    }


  }

});
