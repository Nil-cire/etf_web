"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { materials } from "./mockcontents";

type material = {
  type: string;
  name: string;
  id: string;
  point: number;
};
export default function NextCards() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {materials.map(({ type, name, id, point }: material) => (
        <Card className="mb-4 pb-2" key={id}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{type}</p>
            <small className="text-default-500">{name}</small>
            <h4 className="font-bold text-large">{point}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              // src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
