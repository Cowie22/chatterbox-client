var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var container = [];
    App.fetch(function(data) {

      for (let i = 0; i < data.results.length; i++) {
        RoomsView.renderRoom(data.results[i]);
      }
    });

  },

  render: function() {
  },

  renderRoom: function(message) {
    var textMessages = _.escape(message.room);
    console.log(textMessages);
    $('#rooms select').append(`<span>${textMessages}</span>`);
  },

};
