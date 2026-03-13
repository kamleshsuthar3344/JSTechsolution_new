import { ServiceCategory } from './types';
import { businessServices } from './business';
import { ecommerceServices } from './ecommerce';
import { healthcareServices } from './healthcare';
import { educationServices } from './education';
import { foodServices } from './food';
import { creativeServices } from './creative';
import { mediaServices } from './media';
import { nonprofitServices } from './nonprofit';
import { platformServices } from './platforms';
import { websiteIndustryPackages } from './website';

export * from './types';
export * from './business';
export * from './ecommerce';
export * from './healthcare';
export * from './education';
export * from './food';
export * from './creative';
export * from './media';
export * from './nonprofit';
export * from './platforms';
export * from './digitalMarketing';
export * from './website';
export * from './academy';
export * from './growth';

// Flatten all website services for easier searching/all-view
export const allWebsiteServices: ServiceCategory[] = [
    ...websiteIndustryPackages.reduce((acc, group) => {
        return [...acc, ...group.services];
    }, [] as ServiceCategory[]),
    ...businessServices,
    ...ecommerceServices,
    ...healthcareServices,
    ...educationServices,
    ...foodServices,
    ...creativeServices,
    ...mediaServices,
    ...nonprofitServices,
    ...platformServices
];
