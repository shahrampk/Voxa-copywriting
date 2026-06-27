import { SecondaryBtn } from "../../../shared/components/buttons/Buttons";

const CustomDocsCard = ({ post }) => {
  return (
    <div className="border border-border/50 max-w-sm rounded-lg bg-surface/30 p-3 flex flex-col gap-5">
      <div id="card-header" className="flex justify-end">
        <p
          id="state"
          className={`rounded-full px-4 py-1 text-xs ${post.state === "Active" ? "text-success bg-success/15" : "text-warning bg-warning/15"}  font-medium uppercase`}
        >
          {post.state}
        </p>
      </div>
      <div id="card-content" className="flex flex-col gap-2">
        <h2 id="post-heading" className="text-xl font-semibold line-clamp-2">
          {post.postHeading}
        </h2>
        <p id="post-content" className="line-clamp-2 text-secondary/90">
          {post.postDescription}
        </p>
      </div>
      <div id="card-description" className="flex flex-col gap-2">
        <div id="tone" className="flex justify-between ">
          <h3 className="font-medium text-sm">Tone</h3>
          <p className="text-muted text-sm">{post.tone}</p>
        </div>
        <div id="platform" className="flex justify-between">
          <h3 className="font-medium text-sm">{post.platform}</h3>
          <p className="text-muted text-sm">{post.blogType}</p>
        </div>
      </div>
      <div id="card-CTA" className="w-full">
        <SecondaryBtn value="Use in Workspace" color="#7c3aed" styles={'w-full'} />
      </div>
    </div>
  );
};

export default CustomDocsCard;
