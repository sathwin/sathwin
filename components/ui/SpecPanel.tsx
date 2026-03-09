import { specPanelData } from "@/lib/data";

export default function SpecPanel() {
  return (
    <div className="bg-panel border border-border rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <h3 className="text-lg font-bold bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
          Quick Info
        </h3>
      </div>

      {/* Body */}
      <div className="space-y-6">
        {/* IDENTITY */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-3">Identity</h4>
          <div className="space-y-2">
            {specPanelData.identity.map((item) => (
              <div key={item.key} className="flex items-start gap-3 text-sm">
                <span className="text-text-tertiary min-w-[70px] capitalize">
                  {item.key}:
                </span>
                <span style={{ color: item.color }} className="flex-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-border" />

        {/* CAPABILITIES */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-3">Capabilities</h4>
          <div className="space-y-2">
            {specPanelData.capabilities.map((item) => (
              <div key={item.key} className="flex items-start gap-3 text-sm">
                <span className="text-text-tertiary min-w-[70px] capitalize">
                  {item.key}:
                </span>
                <span style={{ color: item.color }} className="flex-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-border" />

        {/* CERTIFICATIONS */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-3">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {specPanelData.certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs px-3 py-1.5 bg-surface border border-border hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all rounded-lg"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
