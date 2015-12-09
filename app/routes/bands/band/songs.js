
import Ember from 'ember';
import wait from '../../../utils/wait';


var Song = Ember.Object.extend({
title: '',
rating: 0,
band: ''
});
var blackDog = Song.create({
title: 'Black Dog',
band: 'Led Zeppelin',
rating: 3
});
var yellowLedbetter = Song.create({
title: 'Yellow Ledbetter',
band: 'Pearl Jam',
rating: 4
});
var pretender = Song.create({
title: 'The Pretender',
band: 'Foo Fighters',
rating: 2
});
var SongCollection = Ember.Object.extend({
content: [],
sortProperties: ['rating:desc'],
sortedContent: Ember.computed.sort('content', 'sortProperties'),
});
var songs = SongCollection.create();
songs.get('content').pushObject(blackDog);
songs.get('content').pushObject(yellowLedbetter);
songs.get('content').pushObject(pretender);


export default Ember.Route.extend({
  model: function() {
    // return wait(this.modelFor('bands.band'), 3000);
  //  return this.modelFor('bands.band');
  return songs;
  },


  actions: {
    createSong: function() {

      var controller = this.get('controller'),
      band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', {title : controller.get('title') , band: band});


      song.save().then(function(){
        controller.set('title','');

      });
    },

    didTransition: function() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
  }
});
