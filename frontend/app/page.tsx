'use client';

import { useState } from 'react';
import { createDomain } from '@/lib/api/client';

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN!;
const PROTOCOL = process.env.NEXT_PUBLIC_PROTOCOL!;

export default function HomePage() {
  const [subdomain, setSubdomain] = useState('');

  const handleCreate = async () => {
    await createDomain(subdomain);

    window.location.href =
      `${PROTOCOL}://${subdomain}.${ROOT_DOMAIN}`;
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-2">
        <input
          className="border px-4 py-2"
          onChange={e => setSubdomain(e.target.value)}
          placeholder="subdomain"
        />
        <button
          className="bg-black text-white px-4"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
}
