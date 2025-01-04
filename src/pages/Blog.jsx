import { featuredArticles, articles } from '../data/blogData';
import { ArticleCard } from '../components/blog/ArticleCard';

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 text-lg">Insights and stories from our community</p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}