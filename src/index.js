import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateGrid extends Component {
  static propTypes = {
    /** An array of objects represnting a item in the grid. */
    items: PropTypes.array,
    /** A string with a value and a css suffix representing the mininum width of a grid-item. */
    minItemWidth: PropTypes.string,
    /** A string with a value and a css suffix representing the mininum height of a grid-item. */
    minItemWidth: PropTypes.string,
    /** A string with a value and a css suffix representing the gap between each item in the grid. */
    gap: PropTypes.string,
    /** A object of every possible json styling property */
    style: PropTypes.object
  };
  static defaultProps = {
    minItemHeight: "200px",
    minItemWidth: "200px"
  };

  render() {
    const { items, minItemWidth, minItemHeight, gap, style } = this.props;

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
          gridGap: gap,
          ...style
        }}
      >
        {items.map(item => (
          <div
            style={{
              background: item.background || "#eeeeee",
              minHeight: minItemHeight,
              gridRow: item.row || "auto",
              gridColumn: item.col || "auto",
              ...item.style
            }}
          />
        ))}
      </div>
    );
  }
}

export default CreateGrid;
