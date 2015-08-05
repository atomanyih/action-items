import React from "react";
import UI from "pui-react-lists";

var ActionItems = React.createClass({
  render() {
    return (
      <div className="actionItems txt-c">
        <h1 className="em-high em-alt">Do it</h1>
        <UI.GroupList>
          <UI.ListItem>What</UI.ListItem>
        </UI.GroupList>
      </div>
    )
  }
});

React.render(
  <ActionItems />,
  document.getElementById('root')
);