import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function CustomStudioNavbar(props: any) {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center text-logo-shade1 font-semibold">
        <Link href={"/"} className="flex items-center p-3">
          <ArrowLeftIcon className="w-7 h-7 mr-3" />
          <span>Back To Website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default CustomStudioNavbar;
