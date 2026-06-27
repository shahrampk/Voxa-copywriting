import { HookBoxContainer } from "../features/hookPage/Components";
import { PrimaryBtn } from "../shared/components/buttons/Buttons";
import HeadingBox from "../shared/components/HeadingBox";


const Hooks = () => {
  return (
    <div id="hooks-page" className="py-4 px-6 ">
      <HeadingBox
        heading="Hooks Library"
        subHeading="Stop staring at a blank screen. Browse 500+ high-performing opening lines designed to stop the scroll."
        button={<PrimaryBtn value={"Generate Hooks"} />}
      />
      <HookBoxContainer />
    </div>
  );
};

export default Hooks;
