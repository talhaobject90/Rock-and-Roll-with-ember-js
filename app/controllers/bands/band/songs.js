import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },
  searchTerm: '',
  sortBy: 'ratingDesc',

  matchingSongs: Ember.computed('model.songs.@each.title',
  'searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('model.songs').filter(function(song) {
      return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),




  sortProperties: Ember.computed('sortBy', function() {
    var options = {
      "ratingDesc": "rating:desc,title:asc",
      "ratingAsc": "rating:asc,title:asc",
      "titleDesc": "title:desc",
      "titleAsc": "title:asc",
    };
    return options[this.get('sortBy')].split(',');
  }),

  sortedSongs: Ember.computed.sort('matchingSongs', 'sortProperties'),


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

      if(song.get('rating') ===rating)
      {
        rating = 0;
      }
      rating = params.rating;
      song.set('rating', rating);
      song.save();
    },
    setSorting: function(option) {
      this.set('sortBy', option);
    },


  }

});
