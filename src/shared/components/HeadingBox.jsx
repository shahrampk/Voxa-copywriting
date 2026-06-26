import React from "react";
import PageHeading from "./PageHeading";

const HeadingBox = ({ heading, subHeading, button }) => {
  return (
    <div id="heading-box" className="flex justify-between items-center">
      <PageHeading heading={heading} subHeading={subHeading} />
      <div>{button} </div>
    </div>
  );
};

export default HeadingBox;
