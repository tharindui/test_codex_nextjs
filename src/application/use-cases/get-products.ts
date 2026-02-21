import { catalogRepository } from '@/infrastructure/repositories/catalog.repository';

export const getProducts = async () => catalogRepository.getProducts();
