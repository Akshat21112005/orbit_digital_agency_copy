
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedWork from '@/components/FeaturedWork';
import ContactSection from '@/components/ContactSection';
import { Project, Service } from '@/types';

export default function HomePage() {
  const services: Service[] = [
    {
      _id: '1',
      title: 'Web Development',
      description: 'Modern, fast websites built with Next.js, React, and cutting-edge technologies for optimal performance.',
      iconName: 'Code',
      priceRange: '$$$',
    },
    {
      _id: '2',
      title: 'UI/UX Design',
      description: 'Clean, intuitive, and user-centric designs that enhance engagement and deliver seamless experiences.',
      iconName: 'Palette',
      priceRange: '$$',
    },
    {
      _id: '3',
      title: 'Digital Marketing',
      description: 'Data-driven SEO, social media, and growth strategies to increase your online visibility.',
      iconName: 'BarChart3',
      priceRange: '$$',
    },
  ];

  const projects: Project[] = [
    {
      _id: '1',
      title: 'Digital Agency Site',
      description: 'A modern corporate website featuring smooth animations and a clean design system.',
      image: '/projects/agency-site.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      featured: true,
    },
    {
      _id: '2',
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with secure payment integration and real-time inventory management.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'Stripe'],
      link: '#',
      featured: true,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesGrid services={services} />
      <FeaturedWork projects={projects} />
      <ContactSection />
    </div>
  );
}
