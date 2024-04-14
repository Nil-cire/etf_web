const world = [
  {
    type: "world",
    name: "world",
    id: "world",
    point: 1,
    trend: { point: 1, diff: "world" },
  },
];

const materials = [
  {
    type: "material",
    name: "material",
    id: "material",
    point: 1,
    trend: { point: 1, diff: "material" },
    thirty_day_trend: { point: 1, diff: "material" },
  },
];

const etf = [
  {
    type: "etf",
    name: "etf",
    id: "etf",
    point: 1,
    trend: { point: 1, diff: "etf" },
    estimate_interest: "etf",
    interest: [{ month: "June", value: 1 }],
  },
];


export { world, materials, etf }