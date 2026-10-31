import { FEATURES } from "@/lib/features";
import FeatureCard from "./feature-card";

export default function FeaturesSection() {
  return (
    <section id="features" className="section-muted-pattern py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Funkcie nefrologického a dialyzačného informačného systému Arenibus v aktuálnej verzii
          </h2>
          <p className="text-foreground-2 text-sm mb-1">(MVP = Minimum Viable Product)</p>
          <p className="text-foreground-2 text-sm mb-5">(Minimálny životaschopný produkt)</p>
          <p className="text-foreground-2 text-base md:text-lg leading-relaxed">
            Kompletný prehľad modulov implementovaných v živom demo prostredí.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
