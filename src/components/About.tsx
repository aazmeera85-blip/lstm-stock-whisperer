import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, LineChart } from "lucide-react";
import lstmDiagram from "@/assets/lstm-diagram.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Understanding LSTM Networks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Long Short-Term Memory networks are a type of recurrent neural network capable of learning long-term dependencies in sequential data
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LSTM Diagram */}
            <div className="animate-slide-up">
              <Card className="overflow-hidden shadow-elegant border-primary/20">
                <img 
                  src={lstmDiagram} 
                  alt="LSTM Architecture Diagram" 
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Memory Cells</h3>
                      <p className="text-muted-foreground">
                        LSTM networks use special memory cells that can maintain information over long periods, making them ideal for time-series prediction like stock prices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sequential Learning</h3>
                      <p className="text-muted-foreground">
                        By processing historical stock data sequentially, the model learns patterns and trends that influence future price movements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <LineChart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Trend Prediction</h3>
                      <p className="text-muted-foreground">
                        The trained LSTM model can identify complex patterns in stock market data and make informed predictions about future price trends.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
