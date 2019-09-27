import React, { Component } from "react";

const CreateGrid = ({ items, minItemWidth, minItemHeight, gap, style }) => (
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

export default CreateGrid;
