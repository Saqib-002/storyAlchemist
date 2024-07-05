import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="custom-scrollbar">
      <h2 className="h2-semibold pl-8">My Collection</h2>
      <div className="flex h-full flex-wrap gap-8 overflow-y-hidden p-8">
        <Skeleton className="h-[280px] w-[380px] bg-primary-800 max-lg:h-[200px] max-lg:w-[250px]" />
        <Skeleton className="h-[280px] w-[380px] bg-primary-800 max-lg:h-[200px] max-lg:w-[250px]" />
        <Skeleton className="h-[280px] w-[380px] bg-primary-800 max-lg:h-[200px] max-lg:w-[250px]" />
        <Skeleton className="h-[280px] w-[380px] bg-primary-800 max-lg:h-[200px] max-lg:w-[250px]" />
      </div>
    </div>
  );
};

export default loading;
