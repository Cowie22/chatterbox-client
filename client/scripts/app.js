var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = (data)=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // for (var i = 0; i < data.results.length; i++) {
      //   let currentUserName = JSON.stringify(data.results[i].username);
      //   $('#chats').append(`${currentUserName}`);
      // }

      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
