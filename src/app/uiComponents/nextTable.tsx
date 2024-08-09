"use client";
import { useState, useMemo, useRef } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import NextTab from "./nextTab";

interface LatestData {
  [key: string]: any[];
}

interface NextTableProps {
  latestData: LatestData;
}

export default function NextTable({ latestData }: NextTableProps) {
  const [region, setRegion] = useState("tw");
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(latestData[region].length / rowsPerPage);
  const handleRegionChange = (region: string) => {
    setRegion(region);
    setPage(1);
  };
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // TODO: need to handle null case when get_etf_list returns nothing
  const getPaginatedData = useMemo(() => {
    if (!latestData[region]) {
      return [];
    }
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return latestData[region].slice(start, end);
  }, [page, region, latestData]);

  return (
    <>
      <NextTab onSelectionChange={handleRegionChange} />
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={handlePageChange}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">ETF 名稱</TableColumn>
          <TableColumn key="stock_no">編號</TableColumn>
          <TableColumn key="price">目前股價</TableColumn>
          {/* <TableColumn key="interest">殖利率</TableColumn> */}
          <TableColumn key="value_diff">漲跌</TableColumn>
          <TableColumn key="estimate_value">估值</TableColumn>
          <TableColumn key="y_estimate_value">年化報酬率</TableColumn>
        </TableHeader>
        <TableBody items={getPaginatedData}>
          {(item: any) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell
                  className={
                    columnKey === "value_diff"
                      ? item.value_diff.startsWith("-")
                        ? "text-green-500"
                        : "text-red-500"
                      : ""
                  }
                >
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
