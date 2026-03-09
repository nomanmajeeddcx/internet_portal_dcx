import { Volume2, AlertTriangle, Info, AlertCircle } from "lucide-react";

const announcements = [
  {
    icon: AlertTriangle,
    iconColor: "#DC2626",
    iconBg: "#FEF2F2",
    title: "System Maintenance Scheduled for Sunday",
    date: "2 days ago",
  },
  {
    icon: Info,
    iconColor: "#16A34A",
    iconBg: "#F0FDF4",
    title: "New Parking Policy Effective February 1st",
    date: "2 days ago",
  },
  {
    icon: AlertCircle,
    iconColor: "#F59E0B",
    iconBg: "#FFFBEB",
    title: "New Parking Policy Effective February 1st",
    date: "2 days ago",
  },
];

export default function Announcements() {
  return (
    <div className="w-full lg:max-w-[338px] rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Volume2 className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-gray-900">
            Announcements
          </h3>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-semibold hover:bg-[#7A60A9]/20 transition-colors">
          See All
        </button>
      </div>

      {/* Announcements List */}
      <div className="flex flex-col gap-3">
        {announcements.map((announcement, index) => {
          const Icon = announcement.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 px-5 py-4 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all cursor-pointer group"
            >
              {/* Icon Circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: announcement.iconBg }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: announcement.iconColor }}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h4 className="text-base font-semibold text-gray-900 leading-snug">
                  {announcement.title}
                </h4>
                <span className="text-sm text-gray-500">
                  {announcement.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
