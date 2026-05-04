interface PillarCardProps {
  label: string;
  color: "blue" | "teal" | "amber";
  techs: string;
}

const colorConfig = {
  blue: {
    gradient: "from-[#ff6b35] to-[#f7931e]",
    text: "text-[#ff6b35]",
  },
  teal: {
    gradient: "from-[#06ffa5] to-[#14b8a6]",
    text: "text-[#06ffa5]",
  },
  amber: {
    gradient: "from-[#ffd166] to-[#f7931e]",
    text: "text-[#ffd166]",
  },
};

export default function PillarCard({ label, color, techs }: PillarCardProps) {
  const config = colorConfig[color];

  return (
    <div className="group relative bg-panel border border-border hover:border-text-tertiary transition-all duration-300 p-6 rounded-xl">
      {/* Gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>

      {/* Content */}
      <div className="relative flex flex-col gap-3">
        <div className={`text-sm font-bold ${config.text} uppercase tracking-wide`}>
          {label}
        </div>
        <div className="text-sm text-text-secondary leading-relaxed">
          {techs}
        </div>
      </div>
    </div>
  );
}

