var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    var container = [];
    App.fetch(function(data) {

      for (let i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
    });
  },

  render: function(message) {
   
  },

  renderMessage: function(message) {

    $('#chats').append(MessageView.render(message));
  },

};