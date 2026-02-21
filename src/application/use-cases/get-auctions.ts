import { catalogRepository } from '@/infrastructure/repositories/catalog.repository';

export const getAuctions = async () => catalogRepository.getCarAuctions();
