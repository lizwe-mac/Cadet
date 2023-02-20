# Donut Chart
The donut chart is a component that helps us display data in proportioned segments. Each segment is representative of a percentage value that makes up the whole 100%. The total 100% value is represented by the 360 degrees of the circle, with each segment taking up a percentage of that total amount.

### How to use the Donut Chart
The donut chart is exported as `<Donut>` in the components section of the project. To use the chart you will need to place the chart tags where you want it to be displayed. The `<Donut>` component must have a **label** property provided.

```tsx
<div>
    <Donut label="Fruits I consumed this week">
        ...
    </Donut>
</div>
```

Next, we need to define the segments of our chart. Each segment is defined by a `<DonutSlice>` tag that can be placed in the `<Donut>` tags. Each `<DonutSlice>` must have a **value**, **label**, and **colour** property. The **value** property of the slice contributes to the whole value of the chart and does not need to be a percentage. If you have 3 slices, each with the value of **40**, the chart will use **120** as the its benchmark for 100% and will see each value of **40** as a percentage of that.

```tsx
<div>
    <Donut label="Fruits I consumed this week">
        <DonutSlice label="Apples" value={50} colour="primary" />
        <DonutSlice label="Pears" value={12} colour="secondary" />
        <DonutSlice label="Oranges" value={33} colour="accent-2" />
    </Donut>
</div>
```

### Donut Chart Properties
The attributes and properties that can be set on the `<Donut>` and `<DonutSlice>` components.

### `<Donut>`
| Attribute    | Is Required? | Type    | Description                                |
|--------------|--------------|---------|--------------------------------------------|
| label        | true         | string  | The label that is shown for the chart      |
| showTotal    | false        | boolean | Shows what the total value of the chart is |
| showTooltips | false        | boolean | Shows tooltips when hovering on the chart  |

### `<DonutSlice>`
| Attribute    | Is Required? | Type    | Description                                |
|--------------|--------------|---------|--------------------------------------------|
| label        | true         | string  | The data label for this slice     |
| value    | true        | number | The value of this slice |
| colour | true        | ThemeColour | The colour of this slice  |
| previousValue | false        | number | The previous value of this slice. Used for calculating a difference value fo analytics  |