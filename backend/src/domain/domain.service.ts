import { domainRepository } from './domain.repository.js';

export class DomainService {
  create(name: string) {
    if (domainRepository.findByName(name)) {
      throw new Error('Domain already exists');
    }

    domainRepository.save({
      name,
      createdAt: new Date(),
    });
  }

  validate(name: string): boolean {
    return !!domainRepository.findByName(name);
  }
}
