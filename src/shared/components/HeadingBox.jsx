
import PageHeading from "./PageHeading";

const HeadingBox = ({ heading, subHeading, button }) => {
  return (
    <div id="heading-box" className="grid grid-cols-5 justify-between items-center">
      <PageHeading heading={heading} subHeading={subHeading} />
      <div className="-col-start-1">{button} </div>
    </div>
  );
};

export default HeadingBox;
