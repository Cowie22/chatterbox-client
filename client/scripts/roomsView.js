var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    let roomArr = [];
    let uniqArr = [];
    let dataArr = [];
    App.fetch(function(data) {
      dataArr = data.results;
      dataArr.filter(el => {
        if (el.roomname) {
          roomArr.push(el.roomname);
        }
      });
      uniqArr = _.uniq(roomArr);
      uniqArr.map(el => {
        RoomsView.renderRoom({ roomname: el });
      });
    });
  },

  render: function() {
  },

  renderRoom: function(room) {
    $('#rooms').append(this.$select);
    this.$select.append(Rooms.render(room));
  },

};
