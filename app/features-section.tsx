import { FEATURES } from "@/lib/features";
import FeatureCard from "./feature-card";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Funkcie nefrologického a dialyzačného informačného systému Arenibus v aktuálnej verzii
        </h2>
        <p className="text-center text-foreground-2 text-sm mb-1">(MVP = Minimum Viable Product)</p>
        <p className="text-center text-foreground-2 text-sm mb-4">(Minimálny životaschopný produkt)</p>
        <p className="text-center text-foreground-2 text-lg mb-12 max-w-2xl mx-auto">
          Kompletný prehľad modulov implementovaných v živom demo prostredí.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
