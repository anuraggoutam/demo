import {
  CheckCircle,
  LineChart,
  Lightbulb,
  Code,
  Search,
  MessagesSquare,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="mb-4 text-company-red">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-company-darkGray">
        {title}
      </h3>
      <p className="text-company-gray">{description}</p>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart size={40} />,
      title: 'Business Strategy',
      description:
        'Comprehensive analysis and custom strategies to grow your business.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation Consulting',
      description: 'Transform ideas into successful products and services.',
    },
    {
      icon: <Code size={40} />,
      title: 'Digital Solutions',
      description: 'Custom digital products designed to improve your workflow.',
    },
    {
      icon: <Search size={40} />,
      title: 'Market Research',
      description: 'Data-driven insights to help you understand your market.',
    },
    {
      icon: <MessagesSquare size={40} />,
      title: 'Customer Experience',
      description: 'Create meaningful connections with your customers.',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Process Optimization',
      description:
        'Streamline operations to increase efficiency and productivity.',
    },
  ];

  return (
    <section id="services" className="bg-gray-100 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-darkGray">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-company-red mx-auto mb-6"></div>
          <p className="text-company-gray max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to help your
            business succeed in today&apos;s competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
