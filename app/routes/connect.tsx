import type { Route } from "./+types/connect";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connect - Wealthful" },
    { name: "description", content: "Get in touch with Wealthful for questions and collaborations." },
  ];
}

export default function Connect() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Connect With Us</h1>
      <div className="max-w-md mx-auto">
        <form className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      {/* AdSense placeholder */}
      <div className="mt-8 bg-gray-200 h-32 flex items-center justify-center">
        <p className="text-gray-500">Google AdSense Banner</p>
      </div>
    </main>
  );
}
