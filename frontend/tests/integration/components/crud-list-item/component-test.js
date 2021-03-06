import EmberObject from '@ember/object'
import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, settled } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | crud list item', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    assert.expect(2)

    this.set(
      'entry',
      EmberObject.create({
        key: 'Key',
        value: 'Value',
        comment: 'Comment',
        edit: false
      })
    )

    await render(hbs`{{crud-list-item entry=entry edit=entry.edit index=0}}`)

    assert.equal(
      this.$('span.value')
        .text()
        .trim(),
      '********',
      'password is masked'
    )

    this.$('.uk-icon-button[uk-icon="search"]').click()

    return settled().then(() => {
      assert.equal(
        this.$('span.value')
          .text()
          .trim(),
        'Value',
        'password is visible'
      )
    })
  })
})
