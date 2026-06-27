
import HookBox from "./HookBox";


const HookBoxContainer = ({hooksData}) => {
  return (
    <section id="hooks-section" className="grid grid-cols-3 gap-5">
      {hooksData.map((data) => (
        <HookBox key={data.id} data={data} />
      ))}
    </section>
  );
};

export default HookBoxContainer;
