Local Multi-Tenant SaaS Testing with Caddy + nip.io

For local development and testing of a multi-tenant SaaS application, we use Caddy together with nip.io. This setup provides a production-like experience without complex DNS or host configuration.

Why nip.io?

nip.io is a wildcard DNS service that automatically maps subdomains to an IP address.

Example:

tenant1.127.0.0.1.nip.io → 127.0.0.1
tenant2.127.0.0.1.nip.io → 127.0.0.1

Benefits:

No need to edit /etc/hosts

Unlimited dynamic subdomains

Perfect for subdomain-based multi-tenant systems

Works instantly for local development

🔹 Why Caddy?

Caddy is a modern web server and reverse proxy with built-in support for:

Automatic HTTPS

Wildcard domains

Clean reverse proxy configuration

✅ Key Advantages for Multi-Tenant SaaS Development

1️⃣ Subdomain-Based Tenant Simulation

Each tenant can be accessed via its own subdomain:

tenant1.emmai.127.0.0.1.nip.io
tenant2.emmai.127.0.0.1.nip.io


This closely mimics real production environments where tenants are separated by subdomains.

2️⃣ No Manual DNS or Hosts File Configuration

No /etc/hosts editing required

No local DNS server setup

Subdomains work instantly

This saves time and avoids OS-specific configuration issues.

3️⃣ Centralized Reverse Proxy for Frontend & Backend

Caddy routes traffic cleanly:

/api/* → Backend (Node.js / NestJS / Express)

All other routes → Frontend (Next.js / React)

This mirrors real production routing behavior.

4️⃣ Host Header Forwarding for Tenant Detection

Caddy forwards the original Host header:

tenant1.emmai.127.0.0.1.nip.io


This allows the backend or frontend to:

Detect the tenant from the subdomain

Resolve tenant-specific data

Apply tenant-level configuration

5️⃣ Production-Like Local Environment

Wildcard domains

Subdomain isolation

Same routing strategy as production

Easy transition from local → staging → production

This reduces deployment surprises.

6️⃣ Ideal for Microservices & SaaS Architecture

This setup works seamlessly with:

Multi-tenant SaaS platforms

Microservice architectures

Next.js + Node.js backend

Docker & Kubernetes (local clusters)

🧪 Example Local URLs
https://tenant1.emmai.127.0.0.1.nip.io
https://tenant2.emmai.127.0.0.1.nip.io/api/users

📌 Summary

Using Caddy + nip.io enables fast, clean, and scalable local testing for subdomain-based multi-tenant SaaS applications—without DNS complexity or manual configuration.