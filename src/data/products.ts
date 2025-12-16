export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  roastLevel: "light" | "medium" | "dark";
  flavorNotes: string[];
  origin: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description: "A bright and fruity single-origin coffee with complex floral notes and a wine-like acidity.",
    price: 650.00,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    roastLevel: "light",
    flavorNotes: ["Blueberry", "Jasmine", "Citrus"],
    origin: "Ethiopia"
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description: "A well-balanced medium roast with caramel sweetness and nutty undertones.",
    price: 550.00,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500&h=500&fit=crop",
    roastLevel: "medium",
    flavorNotes: ["Caramel", "Walnut", "Chocolate"],
    origin: "Colombia"
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    description: "A bold and earthy dark roast with low acidity and full body.",
    price: 700.00,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop",
    roastLevel: "dark",
    flavorNotes: ["Dark Chocolate", "Earthy", "Spice"],
    origin: "Indonesia"
  },
  {
    id: "4",
    name: "Guatemala Antigua",
    description: "A smooth and sophisticated coffee with hints of cocoa and spice.",
    price: 600.00,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500&h=500&fit=crop",
    roastLevel: "medium",
    flavorNotes: ["Cocoa", "Apple", "Honey"],
    origin: "Guatemala"
  },
  {
    id: "5",
    name: "Kenya AA",
    description: "A vibrant and complex coffee with bold berry notes and bright acidity.",
    price: 750.00,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=500&fit=crop",
    roastLevel: "light",
    flavorNotes: ["Blackcurrant", "Tomato", "Brown Sugar"],
    origin: "Kenya"
  },
  {
    id: "6",
    name: "Brazilian Santos",
    description: "A classic and approachable coffee with nutty flavors and mild sweetness.",
    price: 500.00,
    image: "https://images.unsplash.com/photo-1608651057580-4a50b2fc2281?w=500&h=500&fit=crop",
    roastLevel: "medium",
    flavorNotes: ["Peanut", "Milk Chocolate", "Mild"],
    origin: "Brazil"
  },
  {
    id: "7",
    name: "Italian Espresso Blend",
    description: "A traditional dark roast blend perfect for espresso lovers.",
    price: 580.00,
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=500&h=500&fit=crop",
    roastLevel: "dark",
    flavorNotes: ["Bitter Chocolate", "Roasted Nuts", "Caramel"],
    origin: "Blend"
  },
  {
    id: "8",
    name: "Costa Rica Tarrazu",
    description: "A clean and bright coffee with citrus notes and honey sweetness.",
    price: 680.00,
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=500&h=500&fit=crop",
    roastLevel: "light",
    flavorNotes: ["Orange", "Honey", "Almond"],
    origin: "Costa Rica"
  },
  {
    id: "9",
    name: "French Roast Supreme",
    description: "An intense and smoky dark roast for those who love bold flavors.",
    price: 520.00,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
    roastLevel: "dark",
    flavorNotes: ["Smoky", "Dark Chocolate", "Bold"],
    origin: "Blend"
  },
  {
    id: "10",
    name: "Papua New Guinea",
    description: "An exotic and complex coffee with tropical fruit notes.",
    price: 720.00,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&h=500&fit=crop",
    roastLevel: "medium",
    flavorNotes: ["Tropical Fruit", "Brown Sugar", "Herbal"],
    origin: "Papua New Guinea"
  }
];
