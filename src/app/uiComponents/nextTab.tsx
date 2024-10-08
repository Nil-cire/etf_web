"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { GalleryIcon } from "./GalleryIcon";

export default function NextTab({ onSelectionChange }: any) {
  return (
    <div className="flex w-full flex-col mb-2">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="solid"
        onSelectionChange={onSelectionChange}
      >
        <Tab
          key="tw"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Taiwan ETF</span>
            </div>
          }
        />
        <Tab
          key="asia"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Asia ETF</span>
            </div>
          }
        />
        <Tab
          key="us"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Us ETF</span>
            </div>
          }
        />
        <Tab
          key="global"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Global ETF</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
