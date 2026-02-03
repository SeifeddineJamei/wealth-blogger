import type { Route } from "./+types/insight";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Insights - Wealthful" },
    { name: "description", content: "Discover expert financial insights, investment strategies, and wealth-building tips from Wealthful's comprehensive blog." },
  ];
}

export default function Insight() {
  // Mock data for articles - in a real app, this would come from an API or CMS
  const articles = [
    {
      id: 1,
      title: "The Power of Compound Interest: Building Wealth Over Time",
      excerpt: "Learn how compound interest can exponentially grow your investments and why starting early is crucial for long-term wealth building.",
      date: "2024-01-15",
      category: "Investment Basics",
      readTime: "5 min read",
      image: "/placeholder-article-1.jpg"
    },
    {
      id: 2,
      title: "Diversification Strategies for Risk Management",
      excerpt: "Explore proven diversification techniques to protect your portfolio from market volatility and maximize returns.",
      date: "2024-01-12",
      category: "Risk Management",
      readTime: "7 min read",
      image: "/placeholder-article-2.jpg"
    },
    {
      id: 3,
      title: "Understanding Asset Allocation: A Beginner's Guide",
      excerpt: "Master the fundamentals of asset allocation and learn how to balance your portfolio for optimal growth and stability.",
      date: "2024-01-10",
      category: "Portfolio Management",
      readTime: "6 min read",
      image: "/placeholder-article-3.jpg"
    },
    {
      id: 4,
      title: "Tax-Efficient Investing: Strategies to Keep More of Your Returns",
      excerpt: "Discover tax-saving investment strategies and learn how to minimize your tax burden while maximizing wealth accumulation.",
      date: "2024-01-08",
      category: "Tax Planning",
      readTime: "8 min read",
      image: "/placeholder-article-4.jpg"
    },
    {
      id: 5,
      title: "Real Estate Investment: Pros, Cons, and Getting Started",
      excerpt: "A comprehensive guide to real estate investing, including different strategies, risks, and steps to enter the market.",
      date: "2024-01-05",
      category: "Real Estate",
      readTime: "10 min read",
      image: "/placeholder-article-5.jpg"
    },
    {
      id: 6,
      title: "Retirement Planning: Building a Secure Future",
      excerpt: "Essential strategies for retirement planning, including 401(k)s, IRAs, and creating a sustainable income stream.",
      date: "2024-01-03",
      category: "Retirement",
      readTime: "9 min read",
      image: "/placeholder-article-6.jpg"
    }
  ];

  const categories = ["All", "Investment Basics", "Risk Management", "Portfolio Management", "Tax Planning", "Real Estate", "Retirement"];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Financial Insights & Strategies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert analysis, market insights, and proven strategies to grow your wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-500">Article Preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss our most popular and insightful piece this month.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                  Featured
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  The Psychology of Investing: Overcoming Emotional Biases
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Understanding behavioral finance and how to avoid common psychological traps that can derail your investment success.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Read Featured Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest financial insights and market analysis delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-40 flex items-center justify-center mx-4 mb-8 rounded-2xl shadow-lg border">
        <div className="text-center">
          <p className="text-gray-600 font-semibold text-lg mb-2">Premium Ad Space</p>
          <p className="text-gray-500">Google AdSense Integration - Maximize Revenue</p>
        </div>
      </div>
    </main>
  );
}
