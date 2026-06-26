import React from "react";
import { GhostBtn } from "../../../shared/components/buttons/Buttons";
import { Copy, Heart, SquareArrowRightEnter } from "lucide-react";
import HeartToggle from "../../../shared/components/buttons/HeartToggle";
import CopyBtn from "../../../shared/components/buttons/CopyBtn";

const HookBox = ({ data }) => {
  return (
    <div
      id="hooks-box"
      className="border border-border/80 max-w-md rounded-lg bg-surface/70 p-5 flex flex-col justify-between gap-5"
    >
      <div className="upper flex flex-col items-start gap-5">
        <div id="category-box">
          <p className="bg-warning/30 px-2 rounded-sm border border-warning/50 capitalize">
            {data.hookCategory}
          </p>
        </div>
        <div id="hook-description" className="flex flex-col gap-2">
          <p
            id="hook"
            className="text-xl font-bold italic tracking-wide leading-snug"
          >
            "{data.hook}"
          </p>
          <div id="hook-tags">
            {data.hookTags.map((tag) => (
              <span className="mr-2 text-muted">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="flex justify-between w-full">
          <div className="flex gap-5">
            <CopyBtn line={data.hook} />
            <button className="flex gap-1 items-center">
              <SquareArrowRightEnter size={16} /> Inset
            </button>
          </div>
          <HeartToggle />
        </div>
      </div>
    </div>
  );
};

export default HookBox;
