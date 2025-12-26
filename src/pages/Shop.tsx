import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const [roastFilter, setRoastFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = products
    .filter((product) => {
      if (roastFilter === "all") return true;
      return product.roastLevel === roastFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
          <h1 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
            Our Products
          </h1>
          <p className="font-body text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
            Each of our products is a testament to our love for quality and flavor. 
            From single-origin beans to expertly crafted blends, discover your perfect cup.
          </p>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 lg:px-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-4">
              <Select value={roastFilter} onValueChange={setRoastFilter}>
                <SelectTrigger className="w-[160px] bg-card">
                  <SelectValue placeholder="Roast Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roasts</SelectItem>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] bg-card">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <ProductGrid products={filteredProducts} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;