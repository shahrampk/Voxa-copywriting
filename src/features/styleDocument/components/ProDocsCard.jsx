const ProDocsCard = ({
  title,
  description,
  tags = [],
  icon: Icon,
  bannerBg = "https://img.magnific.com/premium-photo/many-old-books-bookshelf-library_129479-5503.jpg?semt=ais_hybrid&w=740&q=80",
  iconColor = "#a78bfa",
}) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
      {/* Banner */}
      <div className="relative h-35 overflow-hidden">
        <img
          src={
            bannerBg
          }
          alt={`${title}'s image`}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute h-full w-full bg-black-gradient"></div>
        {/* Decorative bars
        <div className="absolute top-4 right-4 flex items-end gap-0.75 opacity-20">
          {[14, 20, 10, 28, 16, 22].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-sm bg-white"
              style={{ height: h }}
            />
          ))}
        </div> */}

        {/* Icon box */}
        <div className="absolute bottom-3 left-3 w-13 h-13 bg-[#2a2a2a] rounded-xl flex items-center justify-center">
          {Icon && <Icon size={24} color={iconColor} />}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4">
        <h3 className="text-[17px] font-medium text-white mb-1">{title}</h3>
        <p className="text-[13px] text-white/60 leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] font-medium px-2.5 py-1 rounded-md"
              style={{ background: "#1e2a4a", color: "#a5b4fc" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Unlock button */}
      <div className="px-3 pb-3">
        <button className="w-full bg-[#2a2a2a] hover:bg-[#333] text-secondary text-[15px] font-medium py-3 rounded-xl transition-colors">
          Unlock with Pro
        </button>
      </div>
    </div>
  );
};

export default ProDocsCard;
