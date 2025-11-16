import { Link } from 'wouter';
import { Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/lib/data';

export default function Blog() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Advocate Naveen Arya Legal Blog',
    description: 'Expert legal insights and guides on criminal law, property disputes, bail rights, and legal matters in Rohtak',
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      datePublished: post.publishedDate,
      keywords: post.keywords.join(', '),
    })),
  };

  const featuredPost = blogPosts[0];

  return (
    <>
      <SEO
        title="Legal Blog | Expert Legal Insights from Rohtak Advocate"
        description="Read expert articles on criminal law, property disputes, bail rights, and legal matters in India. Practical legal guidance from experienced Rohtak advocate."
        keywords={[
          'legal blog rohtak',
          'law articles india',
          'criminal law guide',
          'legal advice blog',
          'rohtak advocate blog',
        ]}
        canonical="/blog"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Legal Insights & Articles
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert guidance on legal matters, case studies, and law updates from an experienced advocate in Rohtak
              </p>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="py-16" data-testid="section-featured">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <Badge variant="default" className="mb-4">Featured Article</Badge>
              </div>
              <Card className="overflow-hidden hover-elevate transition-all" data-testid="card-featured-post">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex p-6 rounded-full bg-primary/10 text-primary mb-4">
                        <User className="h-12 w-12" />
                      </div>
                      <p className="text-sm text-muted-foreground">Featured Post Image</p>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button variant="default" className="gap-2" data-testid="button-read-featured">
                          Read Article
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        <section className="py-16" data-testid="section-all-posts">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover-elevate transition-all" data-testid={`card-post-${post.id}`}>
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-2">
                        <User className="h-8 w-8" />
                      </div>
                      <p className="text-xs text-muted-foreground">Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.keywords.slice(0, 3).map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto font-medium gap-1" data-testid={`link-read-${post.id}`}>
                        Read More
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-topics">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Topics We Cover
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our blog covers a wide range of legal topics to help you understand your rights and navigate the legal system
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Criminal Law',
                  'Bail Rights',
                  'Property Disputes',
                  'Cheque Bounce Cases',
                  'Matrimonial Law',
                  'Civil Litigation',
                  'Legal Procedures',
                  'Court Updates',
                  'Legal Advice',
                  'Case Studies',
                ].map((topic) => (
                  <Badge key={topic} variant="outline" className="px-4 py-2 text-sm">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need Legal Advice?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              While our blog provides general information, every legal case is unique. Contact us for personalized legal consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-cta-contact">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
