
import React from 'react';
import { Heart, Gift, PaintRoller } from 'lucide-react';
import ProductCard from './ProductCard';

const Collections = () => {
  return (
    <section id="collections" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Crafted Collections</h2>
        <p className="text-center text-gray-600 mb-12">Browse what we make or consider what we could create specifically for you.</p>
        
        {/* Crochet Bouquets */}
        <div className="mb-20">
          <h3 className="collection-title">
            <Heart />
            Crochet Bouquets
          </h3>
          <p className="mb-8 max-w-4xl">Flowers that last. Carefully constructed arrangements that don't wilt or fade. A practical alternative to traditional bouquets.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/anotherpinkbouquet.jpeg"
              title="Elegant Pink Roses"
              subtitle="Subtle pink tones"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/thirdpinkbouquet.jpeg"
              title="Vibrant Pink Bunch"
              subtitle="Brighter pink arrangement"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/bluebouquet.jpg"
              title="Cool Blue Blooms"
              subtitle="Calming blue collection"
            />
          </div>
        </div>
        
        {/* Ribbon Bouquets */}
        <div className="mb-20">
          <h3 className="collection-title">
            <Gift />
            Ribbon Bouquets
          </h3>
          <p className="mb-8 max-w-4xl">Structured and refined. Durable bouquets with a distinct look, crafted from quality ribbon materials.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/whitenadgoldbouqte.jpeg"
              title="Sunshine Gold & White"
              subtitle="Warm neutral tones"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/rosesmallbouquet.jpeg"
              title="Classic Red Roses"
              subtitle="Traditional red appeal"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/lovelypinkbouquet.jpeg"
              title="Luxe Pink Medley"
              subtitle="Multi-toned pink arrangement"
            />
          </div>
        </div>
        
        {/* Crochet Plushies */}
        <div className="mb-20">
          <h3 className="collection-title">
            <Heart />
            Crochet Plushies
          </h3>
          <p className="mb-8 max-w-4xl">Handmade companions. Carefully constructed soft pieces with personality, built to last through years of display or play.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/whiteplushie.jpeg"
              title="Fluffy White Friend"
              subtitle="Soft white design"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/pinkplushie.jpeg"
              title="Sweet Pink Bunny"
              subtitle="Rabbit in pink yarn"
            />
          </div>
        </div>
        
        {/* Personalized Glass Paintings */}
        <div className="mb-20">
          <h3 className="collection-title">
            <PaintRoller />
            Personalized Glass Paintings
          </h3>
          <p className="mb-8 max-w-4xl">Custom painted glass. Hand-painted designs capturing characters or moments that matter to you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/glasspaintinganime.jpeg"
              title="Custom Anime Art"
              subtitle="Anime character rendering"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/glasspaintingart.jpeg"
              title="Detailed Character Art"
              subtitle="Character with fine details"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/glasspaintinganime2.jpeg"
              title="Couple Portrait Painting"
              subtitle="Two-person composition"
            />

            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/anotherglasspaintinganime.jpeg"
              title="Vibrant Anime Scene"
              subtitle="Full scene with background"
            />
          </div>
        </div>
        
        {/* Unique Custom Orders */}
        <div>
          <h3 className="collection-title">
            <Gift />
            Unique Custom Orders
          </h3>
          <p className="mb-8 max-w-4xl">Beyond the standard offerings. Unusual combinations and concepts we've tackled successfully. If you have an idea, we're open to discussing it.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/hotwheelsbouquet.jpeg"
              title="Hot Wheels Fan Bouquet"
              subtitle="Cars incorporated into design"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/kitkatbouquet.jpeg"
              title="Sweet KitKat Delight"
              subtitle="Chocolate-themed arrangement"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/3petalbouqet.jpeg"
              title="Unique Petal Bouquet"
              subtitle="Three-petal design"
            />
            
            <ProductCard 
              image="https://raw.githubusercontent.com/druggedtm/kk/main/images/betterhowheelbouquetimage.jpeg"
              title="Deluxe Car Bouquet"
              subtitle="Enhanced vehicle design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
