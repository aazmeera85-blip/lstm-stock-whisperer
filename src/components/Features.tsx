import { Card, CardContent } from "@/components/ui/card";
import { Activity, Database, Zap, Target, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Predictions",
    description: "Generate stock price predictions in real-time using our trained LSTM model with live market data integration.",
  },
  {
    icon: Database,
    title: "Data Preprocessing",
    description: "Advanced data normalization, feature engineering, and sequence generation for optimal model performance.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Efficient model architecture enables quick predictions without compromising accuracy or performance.",
  },
  {
    icon: Target,
    title: "High Accuracy",
    description: "Achieves 95%+ accuracy through careful hyperparameter tuning and extensive training on historical data.",
  },
  {
    icon: BarChart3,
    title: "Multiple Metrics",
    description: "Comprehensive evaluation using RMSE, MAE, and R² score to ensure reliable prediction quality.",
  },
  {
    icon: Shield,
    title: "Risk Analysis",
    description: "Built-in risk assessment features to help understand prediction confidence and market volatility.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by state-of-the-art deep learning technology and comprehensive data analysis
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
