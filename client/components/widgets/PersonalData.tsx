import { UserCircle2, Heart, Calendar, Smartphone } from "lucide-react";

export default function PersonalData() {
  return (
    <div className="w-full lg:w-1/4 rounded-[20px] bg-white/80 pt-2 p-4 shadow-[0_23.45px_31.26px_0_rgba(18,12,55,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-1">
          <UserCircle2 className="size-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3
            className="text-lg font-bold text-[#4F4F4F] capitalize"
            style={{ fontFamily: "'Loew Next Arabic', sans-serif" }}
          >
            Personal Data
          </h3>
        </div>
        <button
          className="px-3 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-bold leading-6"
          style={{ fontFamily: "'Loew Next Arabic', sans-serif" }}
        >
          My Profile
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-row items-center gap-2.5 mb-5">
        <img src="/avatarimg.png" alt="avatarimg" className="size-[52px] object-contain rounded-full" />
        <div className="flex flex-col gap-2 ">
          <h4
            className="text-[28px] font-bold text-[#4F4F4F] leading-6"
            style={{
              fontFamily: "'Loew Next Arabic', sans-serif",
              letterSpacing: "-0.48px",
            }}
          >
            Khalid I. Hamza
          </h4>
          <p
            className="text-xs font-medium leading-3"
            style={{
              fontFamily: "'Loew Next Arabic', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            <span className="text-[#4F4F4F]/50">Job title:</span>
            <span className="text-[#4F4F4F]"> Operations Officer</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col gap-2">
        {/* Pending Approvals - Full Width */}
        <div className="rounded-xl p-4 bg-[#E6DFEFE5]">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#7A60A9]" strokeWidth={1.42} />
            </div>
            <span
              className="text-lg tracking-[-2%] font-bold text-[#4F4F4F] leading-6"
              style={{
                fontFamily: "'Loew Next Arabic', sans-serif",
              }}
            >
              24 days
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p
              className="text-xs font-medium text-[#4F4F4F] mb-1 leading-[18.67px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Your Leave Balance
            </p>
            <button
              className="text-[9px] font-medium text-[#7A60A9] leading-[12.44px] group-hover:underline"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              View Details
            </button>
          </div>
        </div>
        {/* First Row - Two Cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Leave Balance */}
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-[#E6DFEFE5]">
            <div className="flex flex-row items-center gap-1.5">
              <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
                <Calendar
                  className="size-5 text-[#7A60A9]"
                  strokeWidth={1.42}
                />
              </div>
              <span
                className="text-lg tracking-[-2%] font-bold text-[#4F4F4F] leading-6"
                style={{
                  fontFamily: "'Loew Next Arabic', sans-serif",
                  letterSpacing: "-0.36px",
                }}
              >
                03.2020
              </span>
            </div>
            <p
              className="text-xs font-medium text-[#4F4F4F] leading-[18.67px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Joining Date
            </p>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-[#E6DFEFE5]">
            <div className="flex items-center gap-1.5">
              <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
                <Smartphone className="size-5 text-[#7A60A9]" strokeWidth={2} />
              </div>
              <span
                className="text-lg font-bold text-[#4F4F4F] leading-6"
                style={{
                  fontFamily: "'Loew Next Arabic', sans-serif",
                  letterSpacing: "-0.36px",
                }}
              >
                Ext. 2451
              </span>
            </div>
            <p
              className="text-xs font-medium text-[#4F4F4F] mb-1 leading-[18.67px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Extension Number
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
