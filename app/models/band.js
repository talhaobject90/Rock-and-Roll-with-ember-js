
export default Ember.Object.extend({
  name: '',
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
});
