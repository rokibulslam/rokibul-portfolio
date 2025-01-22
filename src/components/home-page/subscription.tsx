import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: 99,
      features: ["5 Pages", "Basic Support", "1 Revision"],
      buttonText: "Select Plan",
      popular: false,
    },
    {
      name: "Pro",
      price: 199,
      features: ["10 Pages", "Priority Support", "3 Revisions"],
      buttonText: "Select Plan",
      popular: true,
    },
    {
      name: "Business",
      price: 299,
      features: ["20 Pages", "24/7 Support", "Unlimited Revisions"],
      buttonText: "Select Plan",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Pages", "Dedicated Support", "Custom Solutions"],
      buttonText: "Contact Us",
      popular: false,
    },
  ];

  return (
    <div className="w-full px-4 py-8 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">
        Choose Your Perfect Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:items-center md:justify-center  mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative max-w-[300px] bg-white shadow-md ${
              plan.popular ? "border-[1px] border-primary" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
            )}
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {typeof plan.price === "number"
                    ? `$${plan.price}`
                    : plan.price}
                </span>
                {typeof plan.price === "number" && (
                  <span className="text-gray-500 ml-1">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-secondary"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
