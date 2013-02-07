suite('Lists', function() {
  var spyUpdate = sinon.spy(gapi.client.tasks.tasklists, 'update')
    , spyCreate = sinon.spy(gapi.client.tasks.tasklists, 'insert')
    , spyDelete = sinon.spy(gapi.client.tasks.tasklists, 'delete')
    ;

  setup(function() {
    spyUpdate.reset();
    spyCreate.reset();
  });

  test('Creating a list', function() {
    var $el = bTask.views.app.$el;

    // Show the add list form
    $el.find('#add-list-button').click();

    // Fill out a value for the new list's title
    $el.find('#list_title').val('Example list');
    $el.find('#list_title').parents('form').first().submit();

    // Make sure the spy has seen a call for a list being created
    assert.equal(1, spyCreate.callCount);
  });

  test('Editing a list', function() {
    var $el = bTask.views.app.$el;

    // Show the edit list form
    $el.find('.list-menu-item:first').click();
    $el.find('#edit-list-button').click();

    $el.find('#list_title').val('Edited list');
    $el.find('#list_title').parents('form').first().submit();

    assert.equal(1, spyUpdate.callCount);
  });

  test('Deleting a list', function() {
    var $el = bTask.views.app.$el;

    // Automatically accept the confirmation
    window.confirm = function() { return true; };

    // Show the edit list form
    $el.find('#edit-list-button').click();

    // Click the list delete button
    $el.find('.delete-list').click();

    assert.equal(1, spyDelete.callCount);
  });
});