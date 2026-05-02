export default function MarqueeTicker() {
  const items = [
    "FREE SHIPPING ON ALL ORDERS",
    "NEW ARRIVALS EVERY MONDAY",
    "EXCLUSIVE DROP 04: OUT NOW",
    "LIMITED EDITION COLLECTIONS",
    "PAN-INDIA EXPRESS DELIVERY",
    "AUTHENTICITY GUARANTEED",
  ];

  return (
    <div className="bg-primary py-3 overflow-hidden border-y border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex shrink-0">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-black font-bebas text-xl lg:text-2xl tracking-widest mx-12 flex items-center"
            >
              {item}
              <span className="ml-12 text-black/30">•</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="text-black font-bebas text-xl lg:text-2xl tracking-widest mx-12 flex items-center"
            >
              {item}
              <span className="ml-12 text-black/30">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
