import type { Domain } from './domain.entity.js';

class DomainRepository {
  private domains: Domain[] = [];

  findByName(name: string): Domain | undefined {
    return this.domains.find(d => d.name === name);
  }

  save(domain: Domain): void {
    this.domains.push(domain);
  }
}

export const domainRepository = new DomainRepository();
