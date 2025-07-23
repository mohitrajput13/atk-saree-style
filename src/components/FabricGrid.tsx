import { Button } from '@/components/ui/button';

const FabricGrid = () => {
  const fabrics = [
    {
      id: 'silk',
      name: 'Silk',
      image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png'
    },
    {
      id: 'cotton',
      name: 'Cotton',
      image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png'
    },
    {
      id: 'georgette',
      name: 'Georgette',
      image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png'
    },
    {
      id: 'organza',
      name: 'Organza',
      image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png'
    },
    {
      id: 'blended',
      name: 'Blended',
      image: '/lovable-uploads/e054d32e-d7c7-4318-8f23-8496f2ff040e.png'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading exactly like the image */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
            Shop By Fabric
          </h2>
        </div>

        {/* Fabric Grid - exactly 5 items in a row like the image */}
        <div className="grid grid-cols-5 gap-6 mb-12">
          {fabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Circular fabric swatch */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-medium text-gray-800">
                {fabric.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Explore Button - exactly like the image */}
        <div className="text-center">
          <Button 
            className="bg-teal-800 hover:bg-teal-700 text-white px-12 py-3 rounded-full text-lg font-medium"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FabricGrid;