const PageHeading = ({ heading, subHeading }) => {
  return (
    <div className="col-span-3">
      <h1 className="text-3xl font-bold text-primary mb-1">{heading}</h1>
      <p className="text-secondary text-md">{subHeading}</p>
    </div>
  );
};

export default PageHeading;
