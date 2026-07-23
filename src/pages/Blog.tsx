import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Search, Mail } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { blogPosts, blogCategories } from '@/data/blog';
import { useState } from 'react';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [email, setEmail] = useState('');

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const recent = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="page-enter">
      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.category },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 text-sm text-medium-gray mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {post.readTime}
                  </span>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-card mb-10">
                  <img src={post.image} alt={post.title} className="w-full h-80 md:h-96 object-cover" loading="lazy" />
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="prose prose-lg max-w-none">
                  {post.content.map((para, i) => (
                    <p key={i} className="text-charcoal text-lg leading-relaxed mb-6">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>

              {/* Author + back */}
              <Reveal delay={2}>
                <div className="flex items-center justify-between border-t border-light-gray/60 pt-8 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                      <span className="text-gold font-display font-bold">N</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-navy">{post.author}</p>
                      <p className="text-medium-gray text-sm">Norvex Management</p>
                    </div>
                  </div>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold-700 transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    All Articles
                  </Link>
                </div>
              </Reveal>

              {/* Related */}
              {related.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-display font-bold text-2xl text-navy mb-6">Related Articles</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {related.map((r) => (
                      <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                        <div className="rounded-2xl overflow-hidden shadow-card mb-4">
                          <img src={r.image} alt={r.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        </div>
                        <h4 className="font-display font-semibold text-navy text-sm group-hover:text-gold-700 transition-colors leading-snug">{r.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Search */}
                <div className="bg-ivory rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-navy mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search articles..."
                      className="w-full bg-white border border-light-gray/60 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-medium-gray" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-ivory rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-navy mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {blogCategories.filter((c) => c !== 'All').map((cat) => (
                      <li key={cat}>
                        <Link
                          to="/blog"
                          className="flex items-center gap-2 text-medium-gray text-sm hover:text-gold-700 transition-colors py-1.5"
                        >
                          <Tag className="h-3.5 w-3.5" />
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent */}
                <div className="bg-ivory rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-navy mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recent.map((r) => (
                      <li key={r.slug}>
                        <Link to={`/blog/${r.slug}`} className="group flex gap-3">
                          <img src={r.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                          <div>
                            <p className="text-navy text-sm font-medium leading-snug group-hover:text-gold-700 transition-colors">{r.title}</p>
                            <p className="text-medium-gray text-xs mt-1">{formatDate(r.date)}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-navy-pattern text-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Stay in the loop</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    Get our latest insights on digital growth delivered to your inbox.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                    />
                    <button type="submit" className="btn-primary w-full justify-center">
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTASection />
    </div>
  );
}

export default function Blog() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    const matchCat = active === 'All' || p.category === active;
    const matchQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery && !p.featured;
  });

  return (
    <div className="page-enter">
      <PageHero
        label="Blog"
        title="Insights on digital growth, design, and technology."
        description="Practical perspectives from our team drawn from real engagements, not theory."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured */}
          {featured && active === 'All' && !query && (
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="group block mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-6 lg:p-8 hover:shadow-card transition-shadow duration-300">
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img src={featured.image} alt={featured.title} className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div>
                    <span className="inline-block bg-gold text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      Featured Article
                    </span>
                    <p className="text-gold-700 text-xs font-semibold uppercase tracking-wider mb-2">{featured.category}</p>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4 group-hover:text-gold-700 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-medium-gray leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-medium-gray mb-6">
                      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(featured.date)}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Search + filters */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      active === cat ? 'bg-navy text-white' : 'bg-ivory text-navy hover:bg-navy/5 border border-light-gray/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative md:w-64">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-ivory border border-light-gray/60 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-medium-gray" />
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden shadow-card mb-5">
                    <img src={post.image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <p className="text-gold-700 text-xs font-semibold uppercase tracking-wider mb-2">{post.category}</p>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-gold-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-medium-gray">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-medium-gray text-lg">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
