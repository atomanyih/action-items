import React from "react";
import UI from "pui-react-lists";
require("./action-items.scss");

var AddActionItem = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    function getInput(ref) {
      var input = React.findDOMNode(ref);
      var result = input.value.trim();
      input.value = '';

      return result;
    }

    var item = {
      owner: getInput(this.refs.owner),
      action: getInput(this.refs.action)
    };

    this.props.onNewItem(item);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="owner" className="txt-r" placeholder="somebody"/>
        needs to
        <input type="text" ref="action" className="txt-l" placeholder="do something"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
});

var ActionItems = React.createClass({
  getInitialState() {
    return {
      items: []
    };
  },
  handleNewItem(item) {
    var newItems = this.state.items;
    newItems.push(item);

    this.setState({
      items: newItems
    });
  },
  render() {
    var items = this.state.items.map((item) => {
      return <UI.ListItem>{item.owner} needs to {item.action}</UI.ListItem>
    });
    return (
      <div className="actionItems txt-c">
        <h1 className="em-high em-alt">Do it</h1>
        <UI.GroupList>
          { items }
          <UI.ListItem>
            <AddActionItem onNewItem={this.handleNewItem}/>
          </UI.ListItem>
        </UI.GroupList>
      </div>
    )
  }
});

React.render(
  <ActionItems />,
  document.getElementById('root')
);