const ITEMS = ["COMMUNITY GROWTH", "WEB3 STRATEGY", "CREATIVE DIRECTION", "BLOCKCHAIN EDUCATION"];

export default function Ticker() {
  return (
    <div className="border-y border-line flex justify-center">
      <div className="font-mono font-semibold text-[13px] text-[#c4ccc7] tracking-wide py-4 px-6 flex flex-wrap justify-center gap-x-7 gap-y-3 text-center">
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-x-7">
            {i > 0 && <b className="text-lime">✦</b>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
