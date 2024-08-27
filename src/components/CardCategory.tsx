import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/app/blog/utils";

const CardCategory = ({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) => {
  return (
    <div>
      <Card className="w-[350px] h-[290px] shadow-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{summary}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">{formatDate(date)}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardCategory;
