import { Icon } from '@/components/atoms/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/molecules/Card';
import { BRAND, HEADINGS } from '@/constants/copy';
import { PAGE_METADATA } from '@/utils/metadata';

export const metadata = PAGE_METADATA.about;

export default function AboutPage() {
  const values = [
    {
      name: 'Innovation',
      icon: 'ph:lightbulb-bold',
      description: 'Pushing boundaries with creative solutions',
    },
    {
      name: 'Excellence',
      icon: 'ph:star-bold',
      description: 'Delivering quality in everything we do',
    },
    {
      name: 'Integrity',
      icon: 'ph:shield-check-bold',
      description: 'Transparent and honest communication',
    },
    { name: 'Growth', icon: 'ph:trend-up-bold', description: 'Your success is our success' },
    {
      name: 'Collaboration',
      icon: 'ph:handshake-bold',
      description: 'Working together towards common goals',
    },
    {
      name: 'Impact',
      icon: 'ph:target-bold',
      description: 'Creating meaningful digital experiences',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1
          className="font-heading mb-4 text-center text-5xl font-semibold"
          style={{ color: 'var(--foreground)' }}
        >
          {HEADINGS.about.main}
        </h1>
        <p
          className="font-body mb-12 text-center text-lg"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {BRAND.longDescription}
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:target-bold" size={24} className="mr-2 inline" />
              {HEADINGS.about.mission}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-body space-y-4" style={{ color: 'var(--muted-foreground)' }}>
              <p>
                At {BRAND.name}, we believe in the transformative power of digital innovation. Our
                mission is to help businesses of all sizes amplify their digital presence through
                strategic thinking, creative excellence, and cutting-edge technology.
              </p>
              <p>
                We combine data-driven insights with creative storytelling to deliver solutions that
                not only look great but drive real business results. From startups to established
                enterprises, we partner with our clients to build digital experiences that engage,
                convert, and inspire.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:heart-bold" size={24} className="mr-2 inline" />
              {HEADINGS.about.values}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {values.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 rounded-lg p-4"
                  style={{ borderWidth: '1px', borderColor: 'var(--border)' }}
                >
                  <div style={{ color: 'var(--brand-primary)' }}>
                    <Icon icon={item.icon} size={32} />
                  </div>
                  <span
                    className="font-heading font-semibold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {item.name}
                  </span>
                  <span className="font-body text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:rocket-launch-bold" size={24} className="mr-2 inline" />
              {HEADINGS.about.approach}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="font-body space-y-3" style={{ color: 'var(--muted-foreground)' }}>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Discovery:</strong> Understanding
                  your unique business goals and challenges
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Strategy:</strong> Crafting
                  data-driven plans aligned with your objectives
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Design:</strong> Creating beautiful
                  experiences that resonate with your audience
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Development:</strong> Building
                  scalable solutions with modern technology
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Optimization:</strong> Continuously
                  improving performance and results
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5" style={{ color: 'var(--brand-primary)' }}>
                  <Icon icon="ph:check-circle-bold" size={20} />
                </div>
                <span>
                  <strong style={{ color: 'var(--foreground)' }}>Support:</strong> Providing ongoing
                  guidance and transparent communication
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
