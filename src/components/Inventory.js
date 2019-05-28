import React from "react";

const Inventory = props => {
  console.log(props);

  const items = () => {
    return props.items.map((element, index) => {
      return <li>{element.name}</li>;
    });
  };

  return <ol>{items()}</ol>;
};

export default Inventory;
