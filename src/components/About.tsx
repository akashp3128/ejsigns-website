function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">About E&J Signs</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            E&J Signs specializes in high-quality t-shirt printing and embroidery on hats, offering custom designs and bulk orders for small businesses, sports teams, events, and healthcare companies.
          </p>
          <p className="text-lg mb-6">
            With years of experience in the custom apparel industry, we pride ourselves on delivering exceptional quality, competitive pricing, and outstanding customer service. Our state-of-the-art equipment and skilled team ensure that every project meets the highest standards.
          </p>
          <p className="text-lg mb-6">
            Whether you need custom t-shirts for your business, embroidered hats for your sports team, or bulk orders for a special event, E&J Signs is your trusted partner for all your custom apparel needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Our Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom T-shirt Printing</li>
                <li>Hat Embroidery</li>
                <li>Bulk Orders</li>
                <li>Custom Design Services</li>
                <li>Corporate Uniforms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Industries We Serve</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Small Businesses</li>
                <li>Sports Teams</li>
                <li>Event Organizers</li>
                <li>Healthcare Companies</li>
                <li>Schools & Universities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 