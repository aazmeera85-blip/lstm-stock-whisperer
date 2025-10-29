import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="AI and Data Science Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md border border-primary/30 rounded-full text-sm font-medium text-primary-foreground shadow-glow">
            <TrendingUp className="w-4 h-4" />
            <span>Deep Learning for Financial Markets</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Stock Market Prediction
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Using LSTM Networks
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Predicting future stock prices with the power of deep learning and advanced time-series analysis
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToDemo}
              className="text-lg px-8 py-6 group"
            >
              View Predictions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="glass"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow-elegant">
              <div className="text-3xl font-bold text-primary-glow">95%+</div>
              <div className="text-sm text-muted-foreground mt-1">Model Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow-elegant">
              <div className="text-3xl font-bold text-primary-glow">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Training Samples</div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow-elegant">
              <div className="text-3xl font-bold text-primary-glow">Real-time</div>
              <div className="text-sm text-muted-foreground mt-1">Predictions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
