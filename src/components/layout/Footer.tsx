import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/terms" 
              className="font-body text-sm hover:underline transition-all duration-200"
            >
              Terms and Policies
            </Link>
            <span className="font-body text-sm">
              © 2025 TINY TIGER
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
};

export default Footer;
