"use client";
import { fetchUrl } from "@/lib/utils";
import React, { useEffect } from "react";

const RecordView = ({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) => {
  useEffect(() => {
    const postData = async () => {
      try {
        await fetch(fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, title, category }),
        });
      } catch (error: any) {
        console.log("🚨Error incrementing view count\n", error);
      }
    };

    postData();
  }, [category, slug, title]);

  return <div></div>;
};

export default RecordView;
