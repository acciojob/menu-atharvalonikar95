import { useState } from 'react';
import './App.css';
import Menu from './Menu';


function App() {
  const[category,setCategory]=useState("all")
  const menuItems = [
  // --- BREAKFAST CATEGORY ---
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
    desc: "Fluffy, golden buttermilk pancakes served with a dollop of fresh butter and pure maple syrup.",
  },
  {
    id: 2,
    title: "Country Benedict",
    category: "breakfast",
    price: 17.49,
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500",
    desc: "Poached eggs and savory country ham on a toasted English muffin, topped with rich hollandaise sauce.",
  },
  {
    id: 3,
    title: "Avocado Sourdough Toast",
    category: "breakfast",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500",
    desc: "Toasted artisan sourdough topped with smashed avocado, cherry tomatoes, feta cheese, and a balsamic drizzle.",
  },

  // --- LUNCH CATEGORY ---
  {
    id: 4,
    title: "Classic Cheeseburger",
    category: "lunch",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    desc: "Flame-grilled beef patty with cheddar cheese, crisp lettuce, tomato, and our signature house sauce on a brioche bun.",
  },
  {
    id: 5,
    title: "Grilled Chicken Caesar Salad",
    category: "lunch",
    price: 16.50,
    img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, garlic croutons, shaved parmesan, and grilled chicken breast.",
  },
  {
    id: 6,
    title: "Smoked Turkey Club",
    category: "lunch",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500",
    desc: "Layers of smoked turkey, crispy bacon, lettuce, tomato, and mayo served on toasted whole wheat bread.",
  },

  // --- SHAKES CATEGORY ---
  {
    id: 7,
    title: "Classic Strawberry Shake",
    category: "shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500",
    desc: "Creamy vanilla ice cream blended with fresh strawberries and topped with whipped cream and a cherry.",
  },
  {
    id: 8,
    title: "Chocolate Oreo Delight",
    category: "shakes",
    price: 7.99,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    desc: "Rich chocolate milkshake blended with crunchy Oreo cookie chunks, chocolate drizzle, and whipped cream.",
  },
  {
    id: 9,
    title: "Salted Caramel Shake",
    category: "shakes",
    price: 7.49,
    img: "https://images.unsplash.com/photo-1534706936160-d5bb61c35938?w=500",
    desc: "A perfect sweet and salty blend of vanilla bean ice cream, artisanal sea salt, and buttery caramel sauce.",
  },
];
const filteredMenu=category==='all'?menuItems:menuItems.filter(item=>item.category===category)
  return (
    <div className='main'>
      <h1 style={{textAlign:"center"}}>Menu</h1>
      <div className="btn-container">
        <button onClick={()=>setCategory("all")}>All</button>
        <button id='filter-btn-1'  onClick={()=>setCategory("breakfast")}>breakfast</button>
        <button id='filter-btn-2'  onClick={()=>setCategory("lunch")}>lunch</button>
        <button id='filter-btn-3'  onClick={()=>setCategory("shakes")}>shakes</button>
      </div>
      <Menu menuItems={filteredMenu} category={category}/>
    </div>
  );
}

export default App;
