import { useRoute, Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/lib/data';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <Link href="/blog">
              <Button variant="default">Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Advocate Naveen Arya Law Practice',
      logo: {
        '@type': 'ImageObject',
        url: 'https://advocatenaveenary.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://advocatenaveenary.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://advocatenaveenary.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://advocatenaveenary.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://advocatenaveenary.com/blog/${post.slug}`,
      },
    ],
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [schema, breadcrumbSchema],
  };

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <SEO
        title={`${post.title} | Advocate Naveen Arya Legal Blog`}
        description={post.excerpt}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        schema={combinedSchema}
      />
      <Header />

      <main>
        <section className="bg-card border-b py-6" data-testid="section-breadcrumb">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <article className="py-16" data-testid="article-main">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>

              <header className="mb-10">
                <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-xl border-2 border-primary/10 mb-8">
                  <img
                    src={post.image}
                    alt={`${post.title} - Expert legal article by Advocate Naveen Arya, best lawyer in Rohtak`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    data-testid="img-post-header"
                  />
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </header>

              <div className="prose prose-lg max-w-none mb-12">
                <div
                  className="text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  data-testid="content-body"
                />
              </div>

              <div className="border-t pt-8 mb-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Advocate, Rohtak</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" data-testid="button-share">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 mb-12" data-testid="section-cta">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Need Legal Assistance?
                </h3>
                <p className="text-muted-foreground mb-6">
                  This article provides general information. For specific legal advice tailored to your situation,
                  contact Advocate Naveen Arya for a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button variant="default" data-testid="button-contact">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <a href="tel:+919050225555" data-testid="button-call">
                    <Button variant="outline">Call Now</Button>
                  </a>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div data-testid="section-related">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.id} className="overflow-hidden hover-elevate transition-all" data-testid={`card-related-${relatedPost.id}`}>
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - Related legal article`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            data-testid={`img-related-${relatedPost.id}`}
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-serif text-lg font-bold text-foreground mb-2 leading-tight line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <Button variant="ghost" className="p-0 h-auto text-sm font-medium" data-testid={`link-related-${relatedPost.id}`}>
                              Read Article →
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
