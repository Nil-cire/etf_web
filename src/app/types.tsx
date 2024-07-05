type DataItem = {
  stock_no: string;
  price: string;
  y_price: string;
  volume: string;
  type: "tw" | "asia" | "global" | "us";
  name: string;
  estimate_value: string;
  y_estimate_value: string;
  value_diff: string;
  update_time: string;
};

export type { DataItem };
