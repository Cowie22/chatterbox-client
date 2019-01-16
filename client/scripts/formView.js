var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };

    // Parse.create(message, () => {
    //   Messages = Messages.concat(message);
    //   MessagesView.render();
    // });
    Parse.create(message, () => {
      Messages.add(message, MessagesView.render);
    });
    
  
  //   $('#chats').prepend(newMessage);
  //   console.log($('#message').val());
  //   console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};