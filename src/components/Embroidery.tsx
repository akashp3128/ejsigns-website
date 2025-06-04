function Embroidery() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">Embroidery Services</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            Our professional embroidery services bring your designs to life with precision and quality. Specializing in hat embroidery, we use state-of-the-art equipment to create durable, beautiful designs that represent your brand or team with pride.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primaryRed">Hat Embroidery</h3>
              <p className="mb-4">
                From baseball caps to beanies, we embroider on all types of headwear. Perfect for sports teams, corporate branding, and promotional events.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>High-quality thread materials</li>
                <li>Precise stitching technology</li>
                <li>Multiple color options</li>
                <li>Custom logo placement</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primaryRed">Bulk Orders</h3>
              <p className="mb-4">
                We specialize in bulk embroidery orders for teams, organizations, and events. Competitive pricing and fast turnaround times guaranteed.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Volume discounts available</li>
                <li>Quick turnaround times</li>
                <li>Consistent quality across all items</li>
                <li>Professional packaging</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primaryBlue">Why Choose Our Embroidery?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <h4 className="font-semibold mb-2">Durability</h4>
                <p>Our embroidery withstands washing and wear, maintaining its appearance for years.</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Precision</h4>
                <p>Advanced machinery ensures every stitch is placed perfectly according to your design.</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Versatility</h4>
                <p>We work with various materials and can accommodate complex multi-color designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Embroidery; 