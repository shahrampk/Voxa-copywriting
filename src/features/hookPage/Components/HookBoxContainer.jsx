
import HookBox from "./HookBox";
import { hookBoxDataArray } from "../../../Data/HooksData";

const HookBoxContainer = () => {
  return (
    <section id="hooks-section" className="grid grid-cols-3 gap-5">
      {hookBoxDataArray.map((data) => (
        <HookBox data={data} />
      ))}
    </section>
  );
};

export default HookBoxContainer;
