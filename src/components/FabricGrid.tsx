import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Fabric data matching the design
const fabrics = [
  {
    id: 'silk',
    name: 'Silk',
    image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png',
    description: 'Luxurious silk sarees with rich texture and lustrous finish'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png',
    description: 'Comfortable and breathable cotton sarees for everyday elegance'
  },
  {
    id: 'georgette',
    name: 'Georgette',
    image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png',
    description: 'Flowing georgette sarees perfect for special occasions'
  },
  {
    id: 'organza',
    name: 'Organza',
    image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png',
    description: 'Sheer and sophisticated organza sarees with ethereal beauty'
  },
  {
    id: 'blended',
    name: 'Blended',
    image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png',
    description: 'Modern blended fabrics combining comfort with style'
  }
];

const FabricGrid = () => {
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);

  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Shop By Fabric
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fabrics.map((fabric) => (
            <div
              key={fabric.id}
              className={`card-luxury p-6 text-center cursor-pointer transition-all duration-300 ${
                selectedFabric === fabric.id 
                  ? 'ring-2 ring-primary shadow-luxury' 
                  : 'hover:shadow-luxury'
              }`}
              onClick={() => setSelectedFabric(
                selectedFabric === fabric.id ? null : fabric.id
              )}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-80"></div>
              </div>
              
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                {fabric.name}
              </h3>
              
              {selectedFabric === fabric.id && (
                <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fabric.description}
                  </p>
                  <Button variant="outline-luxury" size="sm">
                    Explore {fabric.name}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="xl">
            Explore All Fabrics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FabricGrid;