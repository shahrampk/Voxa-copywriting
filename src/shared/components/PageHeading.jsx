import React from "react";

const PageHeading = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-1">{heading}</h1>
      <p className="text-secondary text-lg">{subHeading}</p>
    </div>
  );
};

export default PageHeading;
