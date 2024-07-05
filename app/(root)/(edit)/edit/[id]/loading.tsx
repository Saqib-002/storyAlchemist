import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex-between flex size-full gap-4">
      <Skeleton className="h-full w-[18%] bg-primary-800" />
      <Skeleton className="h-full w-[56%] bg-primary-800" />
      <Skeleton className="h-full w-[18%] bg-primary-800" />
    </div>
  );
};

export default loading;
