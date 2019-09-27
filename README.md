# creategrid

🖼 A react component for easily creating css-grids

## Installation

    yarn add creategrid
    
Or with NPM

    npm install creategrid

## Example

```
import CreateGrid from "creategrid";

<CreateGrid
  gap="1rem"
  style={{ maxWidth: "1200px", margin: "0 auto" }}
  minItemHeight="200px"
  minItemWidth="300px"
  items={[
    {
      background: "#006aff",
      opacity: 1,
      col: "1 / 3"
    },
    {
      opacity: 0.8,
      background: "#ff0099",
      row: "1 / 4",
      col: "3 / 4"
    },
    {
      opacity: 0.6
    },
    {
      opacity: 0.4
    },
    {
      opacity: 0.2
    },
    {
      opacity: 0.1
    }
  ]}
/>
```

## Result

![CSS grid result](https://drive.google.com/uc?export=view&id=10XaF9czXSbdeai4s_45Y_qRHV7-bq3QJ "CSS grid result")

### Contribute

Check out the repo [here](https://github.com/albingroen/grid), fork it and create a PR
