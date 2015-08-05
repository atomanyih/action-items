import React from "react";
import UI from "pui-react-lists";

var AddActionItem = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var textInput = React.findDOMNode(this.refs.text);
    var text = textInput.value.trim();
    textInput.value = '';

    this.props.onNewItem(text);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="text" className="txt-c"/>
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

    console.log(`ok ${newItems}`);


    this.setState({
      items: newItems
    });
  },
  render() {
    var items = this.state.items.map((item) => {
      return <UI.ListItem>{item}</UI.ListItem>
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