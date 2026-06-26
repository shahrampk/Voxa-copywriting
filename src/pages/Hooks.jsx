import React from "react";
import { PrimaryBtn } from "../shared/components/buttons/Buttons";
import HeadingBox from "../shared/components/HeadingBox";
import HookBox from "../features/hookpage/Components/HookBox";
import { hookBoxDataArray } from "../Data/HooksData";

const Hooks = () => {
  return (
    <div id="hooks-page" className="py-4 px-6 ">
      <HeadingBox
        heading="Hooks Library"
        subHeading="Stop staring at a blank screen. Browse 500+ high-performing opening lines designed to stop the scroll."
        button={<PrimaryBtn value={"Generate Hooks"} />}
      />
      <section id="hooks-section" className="grid grid-cols-3 gap-5">
        {hookBoxDataArray.map((data) => (
          <HookBox data={data} />
        ))}
      </section>
    </div>
  );
};

export default Hooks;
