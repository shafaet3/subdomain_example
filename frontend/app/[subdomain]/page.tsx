import { validateDomain } from '@/lib/api/server';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ subdomain: string }>;
};

export default async function SubdomainPage({ params }: PageProps) {
  const { subdomain } = await params;

  const isValid = await validateDomain(subdomain);

  if (!isValid) notFound();

  return (
    <h1 className="text-4xl text-center mt-20">
      Welcome to {subdomain}.emmai.app 
      
    </h1>
  );
}
