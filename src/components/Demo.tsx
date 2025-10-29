import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { TrendingUp, Download } from "lucide-react";
import { useState } from "react";

// Sample data for demonstration
const generateData = (ticker: string) => {
  const basePrice = ticker === "AAPL" ? 170 : ticker === "TSLA" ? 240 : 380;
  const data = [];
  
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (30 - i));
    
    const actual = basePrice + Math.sin(i / 3) * 10 + Math.random() * 5;
    const predicted = actual + (Math.random() - 0.5) * 3;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      actual: parseFloat(actual.toFixed(2)),
      predicted: parseFloat(predicted.toFixed(2)),
    });
  }
  
  return data;
};

const tickers = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "TSLA", name: "Tesla Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
];

export const Demo = () => {
  const [selectedTicker, setSelectedTicker] = useState("AAPL");
  const [data, setData] = useState(generateData("AAPL"));

  const handleTickerChange = (ticker: string) => {
    setSelectedTicker(ticker);
    setData(generateData(ticker));
  };

  return (
    <section id="demo" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Live Predictions Demo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore real-time LSTM predictions vs. actual stock prices for major companies
            </p>
          </div>

          {/* Ticker Selection */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {tickers.map((ticker) => (
              <Button
                key={ticker.symbol}
                variant={selectedTicker === ticker.symbol ? "default" : "outline"}
                size="lg"
                onClick={() => handleTickerChange(ticker.symbol)}
                className="min-w-[140px]"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                {ticker.symbol}
              </Button>
            ))}
          </div>

          {/* Chart Card */}
          <Card className="border-primary/20 shadow-elegant animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">
                    {tickers.find(t => t.symbol === selectedTicker)?.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    30-Day Price Prediction Analysis
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="date" 
                    className="text-xs"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis 
                    className="text-xs"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                    name="Actual Price"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "hsl(var(--accent))", r: 4 }}
                    name="LSTM Prediction"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">0.85</div>
                <div className="text-sm text-muted-foreground">RMSE Score</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">0.92</div>
                <div className="text-sm text-muted-foreground">R² Score</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.3%</div>
                <div className="text-sm text-muted-foreground">Mean Error</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
