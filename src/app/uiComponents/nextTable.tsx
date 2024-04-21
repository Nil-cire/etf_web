"use client";
import { useState, useMemo } from "react";
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
import { etfs } from "./mockcontents";
import NextTab from "./nextTab";
export default function NextTable() {
  const [region, setRegion] = useState("tw");
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(etfs[region].length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return etfs[region].slice(start, end);
  }, [page, region]);

  return (
    <>
      <NextTab onSelectionChange={(region: string) => setRegion(region)} />
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
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">ETF 名稱</TableColumn>
          <TableColumn key="type">編號</TableColumn>
          <TableColumn key="point">目前股價</TableColumn>
          <TableColumn key="point">漲跌(1日)</TableColumn>
          <TableColumn key="point">估值</TableColumn>
          <TableColumn key="point">年化報酬率</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
