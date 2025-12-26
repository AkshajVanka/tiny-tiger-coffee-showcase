import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const grindOptions = [
  { value: "whole_bean", label: "Whole Bean" },
  { value: "coarse", label: "Coarse (French Press)" },
  { value: "medium", label: "Medium (Drip)" },
  { value: "fine", label: "Fine (Espresso)" },
];

const sizeOptions = [
  { value: "250g", label: "250g", priceMultiplier: 1 },
  { value: "500g", label: "500g", priceMultiplier: 1.9 },
  { value: "1kg", label: "1kg", priceMultiplier: 3.5 },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [grindType, setGrindType] = useState("whole_bean");
  const [bagSize, setBagSize] = useState("250g");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-3xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Back to Products</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const selectedSize = sizeOptions.find((s) => s.value === bagSize);
  const currentPrice = product.price * (selectedSize?.priceMultiplier || 1);

  const getRoastBadgeClass = (roastLevel: string) => {
    switch (roastLevel) {
      case "light":
        return "bg-accent-green text-white";
      case "medium":
        return "bg-accent-blue text-white";
      case "dark":
        return "bg-accent-red text-white";
      default:
        return "bg-muted";
    }
  };

  const handleAddToCart = async () => {
    await addToCart({
      product_id: product.id,
      product_name: product.name,
      product_image: product.image,
      price: currentPrice,
      quantity,
      grind_type: grindType,
      bag_size: bagSize,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <Badge className={`absolute top-4 left-4 ${getRoastBadgeClass(product.roastLevel)}`}>
              {product.roastLevel.toUpperCase()} ROAST
            </Badge>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-2">{product.origin}</p>
              <h1 className="font-display text-4xl lg:text-5xl mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary">
                Rs. {currentPrice.toFixed(2)}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div>
              <h3 className="font-medium mb-2">Flavor Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note) => (
                  <Badge key={note} variant="outline">
                    {note}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Grind Type</label>
                <Select value={grindType} onValueChange={setGrindType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {grindOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-medium mb-2">Bag Size</label>
                <Select value={bagSize} onValueChange={setBagSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sizeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart — Rs. {(currentPrice * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
