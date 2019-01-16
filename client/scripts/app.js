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
    //App.post(App.startSpinner);

  },

  fetch: function(callback = (data)=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // Messages = data.results
      // console.log(data)
      Messages.update(data.results, MessagesView.render);
      // Rooms.update(data.results, RoomsView.render);

      callback(data);
    });
  },

  // post: function(callback = (data)=>{}) {
  //   Parse.create((data) => {
    
  //     callback(data);
  //   });
  // },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
