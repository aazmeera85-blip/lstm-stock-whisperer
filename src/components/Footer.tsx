import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              LSTM Stock Predictor
            </h3>
            <p className="text-muted-foreground text-sm">
              Advanced stock market prediction using deep learning and time-series analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About LSTM
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary transition-colors">
                  Live Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow our project and stay updated with the latest developments.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Stock Market Prediction Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
