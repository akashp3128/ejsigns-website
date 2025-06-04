function Printing() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">T-Shirt Printing Services</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            Transform your ideas into wearable art with our premium t-shirt printing services. Using the latest printing technology and high-quality materials, we deliver vibrant, long-lasting designs that make a statement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primaryRed">Custom T-Shirt Printing</h3>
              <p className="mb-4">
                From single pieces to large quantities, we print custom designs on high-quality t-shirts. Perfect for businesses, events, teams, and personal projects.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Screen printing for bulk orders</li>
                <li>Digital printing for small quantities</li>
                <li>Full-color designs available</li>
                <li>Various shirt styles and colors</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primaryRed">Design Services</h3>
              <p className="mb-4">
                Don't have a design? No problem! Our creative team can help bring your vision to life with professional design services.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Logo design and creation</li>
                <li>Text and typography services</li>
                <li>Design consultation</li>
                <li>File preparation and optimization</li>
              </ul>
            </div>
          </div>

          <div className="bg-primaryBlue text-white p-8 rounded-lg my-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Printing Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Screen Printing</h4>
                <p>Ideal for bulk orders with solid colors. Durable, cost-effective, and produces vibrant colors that last.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Digital Printing</h4>
                <p>Perfect for small quantities and complex designs. Full-color capability with photographic quality results.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primaryBlue">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-primaryRed">Corporate</h4>
                <p>Employee uniforms and promotional items</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-primaryRed">Sports Teams</h4>
                <p>Team jerseys and fan merchandise</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-primaryRed">Events</h4>
                <p>Conference shirts and giveaways</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-primaryRed">Healthcare</h4>
                <p>Medical facility uniforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Printing; 