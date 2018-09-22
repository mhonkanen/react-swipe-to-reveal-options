
var SwipeToRevealList = React.createClass({
  displayName: "SwipeToRevealList",

  render() {
    var items = [
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Mathieu",
        callActionWhenSwipingFarLeft: true,
        callActionWhenSwipingFarRight: true
      },
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Arseny",
        callActionWhenSwipingFarRight: true,
        callActionWhenSwipingFarLeft: false
      },
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Bruno",
        callActionWhenSwipingFarRight: false,
        callActionWhenSwipingFarLeft: false
      }
    ];
    return (
      React.createElement("div", null,
      items.map(function(item) {
        return (
          React.createElement(SwipeToRevealOptions, {
            leftOptions: item.leftOptions,
            rightOptions: item.rightOptions,
            callActionWhenSwipingFarRight: item.callActionWhenSwipingFarRight,
            callActionWhenSwipingFarLeft: item.callActionWhenSwipingFarLeft},
            item.content
          )
        );
      })
      )
    );
  },

  handleClick() {
    this.refs.button.loading();
    //make asynchronious call
    setTimeout(function() {
      this.refs.button.success();
    }.bind(this), 3000);
  }
});

React.render(React.createElement(SwipeToRevealList, null), document.getElementById("react-content"));
