const world = [
  {
    type: "world",
    name: "world",
    id: "world",
    point: 1,
    trend: { point: 1, diff: "world" },
  },
];

const material = {
  type: "material",
  name: "material",
  id: "material",
  point: 1,
  trend: { point: 1, diff: "material" },
  thirty_day_trend: { point: 1, diff: "material" },
};

const etf = {
  type: "etf",
  name: "etf",
  id: "etf",
  point: 1,
  trend: { point: 1, diff: "etf" },
  estimate_interest: "etf",
  interest: [{ month: "June", value: 1 }],
};

let regions = ["Tw", "Asia", "Global"];

const addMockMaterials = (material: any) => {
  let res: any = [];
  let { type, name, id, point } = material;
  regions.forEach((region) => {
    for (let i = 0; i < 10; i++) {
      res.push({
        ...material,
        type: `${region}-${type}${i}`,
        name: `${region}-${name}${i}`,
        id: `${id}${i}`,
        point: point + i,
      });
    }
  });

  return res;
};

const addMockEtfs = (etf: any) => {
  let res: any = [];
  let { type, name, id, point } = etf;

  regions.forEach((region) => {
    for (let i = 0; i < 10; i++) {
      res.push({
        ...etf,
        type: `${region}-${type}${i}`,
        name: `${region}-${name}${i}`,
        id: `${id}${i}`,
        point: point + i,
      });
    }
  });

  return res;
};

const materials = addMockMaterials(material);
const etfs = addMockEtfs(etf);

export { world, materials, etfs };
