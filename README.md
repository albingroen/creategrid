# creategrid

A react component for easily creating css-grids

    npm i creategrid

## Example

```
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

![alt text](file:///Users/albingroen/Desktop/grid-result.png "CSS grid result")

### Contribute

Check out the repo [here](https://github.com/albingroen/grid), fork it and create a PR
