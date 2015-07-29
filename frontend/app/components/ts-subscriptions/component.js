import Ember from 'ember'

const { on, inject } = Ember

/**
 * Timescout component
 *
 * @class TimescoutComponent
 * @public
 */
export default Ember.Component.extend({

  /**
   * Timescout service
   *
   * @property {TimescoutService} timescout
   * @public
   */
  timescout: inject.service(),

  /**
   * Fetch the timescout data
   *
   * @return {void}
   */
  fetchData: on('init', async function() {
    try {
      this.set('model', await this.get('timescout').fetchProjects())
    }
    catch (e) {
      this.set('error', e)
    }
  })
})