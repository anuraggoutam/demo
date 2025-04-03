'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

const Testimonial = ({
  content,
  name,
  position,
  company,
  avatar,
}: TestimonialProps) => (
  <Card className="border-none shadow-md h-full">
    <CardContent className="p-8 flex flex-col h-full">
      <div className="mb-6 text-company-red">
        <Quote size={40} />
      </div>
      <p className="text-company-gray mb-8 grow">{content}</p>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-company-darkGray">{name}</h4>
          <p className="text-sm text-company-gray">
            {position}, {company}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        'Working with this company transformed our business operations. Their strategic insights and hands-on approach delivered exceptional results that exceeded our expectations.',
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      content:
        "The team's expertise and dedication to our project was impressive. They understood our challenges and developed solutions that perfectly addressed our needs.",
      name: 'Michael Chen',
      position: 'Operations Director',
      company: 'Global Solutions',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    {
      content:
        "I've worked with many consultants before, but this team truly stands out. Their commitment to excellence and ability to deliver on tight deadlines made all the difference.",
      name: 'Emily Rodriguez',
      position: 'Marketing VP',
      company: 'Innovate Co.',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to mobile view

  useEffect(() => {
    // Set initial value on component mount
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    // Call once on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="bg-company-lightGray section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-darkGray">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-company-red mx-auto mb-6"></div>
          <p className="text-company-gray max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        {testimonials.length > itemsPerPage && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-company-gray text-company-gray hover:text-company-red hover:border-company-red transition-colors mr-4"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-company-gray text-company-gray hover:text-company-red hover:border-company-red transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
