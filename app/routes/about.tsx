import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Wealthful" },
    { name: "description", content: "Learn more about Wealthful and our mission to empower wealth management." },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Wealthful</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Wealthful is dedicated to providing valuable insights and resources for individuals seeking to build and manage their wealth effectively.
          Our team of experts shares knowledge on investment strategies, financial planning, and wealth-building techniques.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're a seasoned investor or just starting your financial journey, Wealthful offers articles, tips, and tools to help you achieve your financial goals.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower individuals with the knowledge and tools necessary to make informed financial decisions and build lasting wealth.
          </p>
        </div>
      </div>
      {/* AdSense placeholder */}
      <div className="mt-8 bg-gray-200 h-32 flex items-center justify-center">
        <p className="text-gray-500">Google AdSense Banner</p>
      </div>
    </main>
  );
}
