import { Globe } from "lucide-react";

const stats = [
  {
    value: "90000",
    unit: "MT",
    label: "Production and Capacity of Sponge Iron",
  },
  {
    value: "105000",
    unit: "MT",
    label: "Production and Capacity of Billets",
  },
  {
    value: "11.5",
    unit: "MW",
    label: "Production and Capacity of Power",
  },
  {
    value: "16.25",
    unit: "MW",
    label: "Production and Capacity of Solar",
  },
];

export default function Stats() {
  return (
    <section className="pt-6 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative md:-mt-24 rounded-xl bg-gray-50 py-6 md:py-8 shadow-sm">
          <div className="grid grid-cols-1 divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="px-4 max-lg:py-6 md:px-6 text-center md:text-left"
              >
                {/* Optional Icon */}
                {/* <Globe className="mb-3 h-8 w-8 text-gray-300 mx-auto md:mx-0" /> */}

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {item.value}
                  <span className="ml-1 text-base md:text-lg font-semibold text-gray-600">
                    {item.unit}
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}