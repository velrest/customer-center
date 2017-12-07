import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  duration: attr('django-duration'),
  billingType: attr('number'),
  price: attr('string')
})
