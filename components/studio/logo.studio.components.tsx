import Image from "next/image";
import React from "react";

export const CustomStudioLogo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      {" "}
      <Image
        src="/logo.png"
        className=""
        width={50}
        height={50}
        alt="Kenny Hoft's Logo"
      />
      {renderDefault && <>{props.renderDefault(props)}</>}
    </div>
  );
};
