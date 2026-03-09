import { ListChecks } from "lucide-react";

const approvals = [
  {
    title: "Annual Leave",
    requester: "Jack Harring",
    updatedAt: "Updated 2 h",
    status: "Active",
  },
  {
    title: "Training Request",
    requester: "Jack Harring",
    updatedAt: "Updated 16 h",
    status: "Overdue",
  },
  {
    title: "Overtime Approval",
    requester: "Jack Harring",
    updatedAt: "Updated 23 h",
    status: "Active",
  },
];

export default function PendingApprovals() {
  return (
    <div className="w-full lg:max-w-[338px] rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <ListChecks className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-gray-900">
            Pending Approvals
          </h3>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-semibold hover:bg-[#7A60A9]/20 transition-colors">
          See All
        </button>
      </div>

      {/* Approvals List */}
      <div className="flex flex-col gap-3">
        {approvals.map((approval, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 px-5 py-4 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all cursor-pointer group"
          >
            {/* Title and Status */}
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-base font-semibold text-gray-900 leading-snug flex-1">
                {approval.title}
              </h4>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${approval.status === "Active"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                  }`}
              >
                {approval.status}
              </span>
            </div>

            {/* Requester Info */}
            <div className="flex items-center justify-between gap-2 text-sm text-gray-500">
              <span className="font-medium">{approval.requester}</span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span>{approval.updatedAt}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
