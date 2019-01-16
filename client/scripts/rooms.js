var Rooms = {
  // _data: new Set,

  // update: function(messages) {
  //   _.chain(messages)
  //     .pluck('roomname')
  //     .uniq()
  //     .each(room => Rooms._data.add(room));
  
  // }

  render: _.template(`
      <option class="room-name"> 
         <%- roomname %>
      </option>
    `)
};