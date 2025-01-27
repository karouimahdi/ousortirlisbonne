import { getLocale, getPayloadInstance } from '@/lib/payload';
import CombinedArticlePage from './CombinedArticlePage';

export default async function BlogPage() {
   const payload = await getPayloadInstance();
    const locale = await getLocale();
   
  const [articlesRes, categoriesRes] = await Promise.all([
    payload.find({
      collection: 'blogs',
      locale: locale,

    }),
    payload.find({
      collection: 'blogs-categories',
      locale: locale,

    })
  ]);

  const articles = articlesRes.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    image: doc.image?.url,
    content: doc.content,
    slug: doc.slug,
    date: doc.date,
    category: {
      id: doc.category.id,
      title: doc.category.title,
      color: doc.category.color
    },
    readTime: doc.readTime,
    tags: doc.tags?.map((t: any) => t.tag) || [],
    featured: doc.featured
  }));


  const categories = categoriesRes.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    icon: doc.icon,
    color: doc.color,
    priority:doc.priority,
    tag: doc.tags?.map((t: any) => t.tag) || [],

  }));

  return <CombinedArticlePage articles={articles} categories={categories} />;
}
