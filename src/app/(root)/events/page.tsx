import { getLocale, getPayloadInstance } from '@/lib/payload';
import CombinedEventsPage from './EventPage';

export default async function BlogPage() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();

  const [eventRes, categoriesRes] = await Promise.all([
    payload.find({
      collection: 'events',
      locale: locale,
    }),
    payload.find({
      collection: 'events-categories',
      locale: locale,
    }),
  ]);

  const events = eventRes.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    image: doc.image?.url,
    slug: doc.slug,
    date: doc.date,
    category: {
      id: doc.category.id,
      title: doc.category.title,
      color: doc.category.color,
    },
    location: doc.location,
    capacity: doc.capacity,
    price: doc.price,
    time:doc.time
  }));

  const categories = categoriesRes.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    icon: doc.icon,
    color: doc.color,
    priority: doc.priority,
    tags: doc.tags?.map((t: any) => t.tag) || [],
  }));

  return <CombinedEventsPage events={events} categories={categories} />;
}