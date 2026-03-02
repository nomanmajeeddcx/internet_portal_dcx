interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative [background:linear-gradient(90deg,#482980_8%,#7A60A9_100%)] py-[52px] w-full px-[38px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <img
        src="/HeroImage.png"
        className="absolute opacity-40 top-0 min-w-[679px] h-full object-cover"
      />
      <h3
        className="text-4xl tracking-[-2%] font-medium leading-8 text-white"
        style={{
          fontFamily: "'Loew Next Arabic', sans-serif",
        }}
      >
        Hi,
        <span className="font-bold"> {title}</span>
      </h3>

      <div
        className="w-full sm:w-[338px] h-10 flex items-end justify-end rounded-xl"
        style={{ backdropFilter: "blur(9.6px)" }}
      >
        <div className="flex items-center blur-[19.2] p-2 gap-3 rounded-xl w-full h-full bg-white/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 20L15.5 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none placeholder:text-white text-white text-sm sm:text-base font-bold leading-[22px]"
          />
        </div>
      </div>
    </div>
  );
}
