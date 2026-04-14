type PlanItem = {
  name: string;
  price: string;
  features: string[];
};

type ServicesPricingProps = {
  title: string;
  plans: PlanItem[];
  buttonText: string;
};

export default function ServicesPricing({
  title,
  plans,
  buttonText,
}: ServicesPricingProps) {
  return (
    <section className="w-full py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-black">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="w-full p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition text-black flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

              <p className="text-2xl font-bold text-green-500 mb-4">
                {plan.price}
              </p>

              <ul className="text-sm text-gray-500 mb-6 space-y-2 text-center">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                {buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}