import { FolderOpen, FileText, ChevronRight } from "lucide-react";

const documents = [
  { name: "Company Policy", count: 24 },
  { name: "Internal Committees", count: 18 },
  { name: "Agreement", count: 15 },
  { name: "Corporate Brandbook", count: 30 },
  { name: "Templates & Forms", count: 52 },
];

export default function Documents() {
  return (
    <div className="w-full lg:max-w-[338px] rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <FolderOpen className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-gray-900">
            Documents
          </h3>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-semibold hover:bg-[#7A60A9]/20 transition-colors">
          See All
        </button>
      </div>

      {/* Documents List */}
      <div className="flex flex-col gap-3">
        {documents.map((doc, index) => (
          <button
            key={index}
            className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">

              {/* Document Count Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 shrink-0">
                <FileText className="w-4 h-4 text-blue-600" strokeWidth={2} />
                <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                  {doc.count}
                </span>
              </div>

              {/* Document Name */}
              <span className="text-base font-semibold text-gray-700 truncate">
                {doc.name}
              </span>
            </div>

            {/* Chevron */}
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#7A60A9] transition-colors shrink-0" strokeWidth={1.5} />
          </button>

        ))}
      </div>
    </div>
  );
}
