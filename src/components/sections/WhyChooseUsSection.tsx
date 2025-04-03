import { Shield, Clock, Users, Award } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard = ({ icon, title, description }: ReasonCardProps) => (
  <div className="flex items-start">
    <div className="mr-4 text-company-red">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-company-darkGray">
        {title}
      </h3>
      <p className="text-company-gray">{description}</p>
    </div>
  </div>
);

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield size={36} />,
      title: 'Proven Expertise',
      description:
        'Over 15 years of experience delivering exceptional results for our clients across various industries.',
    },
    {
      icon: <Clock size={36} />,
      title: 'Timely Delivery',
      description:
        'We understand the importance of deadlines and consistently deliver projects on time, every time.',
    },
    {
      icon: <Users size={36} />,
      title: 'Dedicated Team',
      description:
        'Our team of experts is committed to providing personalized service tailored to your unique needs.',
    },
    {
      icon: <Award size={36} />,
      title: 'Award-Winning Solutions',
      description:
        'Recognized in the industry for our innovative approaches and outstanding client satisfaction.',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-darkGray">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-company-red mb-6"></div>
            <p className="mb-6">
              Here&apos;s why clients choose us for their digital needs
            </p>
            <p className="text-company-gray mb-8">
              We&apos;re dedicated to helping businesses grow and succeed. Our
              approach combines industry expertise, innovative thinking, and a
              commitment to delivering measurable results.
            </p>
            <div className="space-y-8">
              {reasons.slice(0, 2).map((reason, index) => (
                <ReasonCard
                  key={index}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {reasons.slice(2).map((reason, index) => (
              <ReasonCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
