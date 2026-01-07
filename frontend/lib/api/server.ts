// lib/api/server.ts
const INTERNAL_API =
  process.env.BACKEND_INTERNAL_URL ?? 'http://localhost:4000';

export async function validateDomain(
  name: string
): Promise<boolean> {
  const res = await fetch(
    `${INTERNAL_API}/domains/${name}`,
    { cache: 'no-store' }
  );

  if (!res.ok) return false;

  const data = await res.json();
  return data.valid === true;
}
