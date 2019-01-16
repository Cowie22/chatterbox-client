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
    // .filter (Room.isSelected(message))
    Messages.items()
      .each((message) => {
        var $message = MessageView.render(message);
        MessagesView.$chats.prepend($message);
      });
  },

  renderMessage: function(message) {

    $('#chats').append(MessageView.render(message));
  },

};