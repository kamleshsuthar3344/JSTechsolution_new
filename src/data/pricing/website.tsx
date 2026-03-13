import { IndustryGroup } from './types';
import { ecommerceServices } from './ecommerce';
import { businessServices } from './business';
import { healthcareServices } from './healthcare';
import { educationServices } from './education';
import { foodServices } from './food';
import { creativeServices } from './creative';
import { mediaServices } from './media';
import { nonprofitServices } from './nonprofit';

export const websiteIndustryPackages: IndustryGroup[] = [
    { title: "E-Commerce & Online Store", services: ecommerceServices },
    { title: "Business & Corporate", services: businessServices },
    { title: "Healthcare & Wellness", services: healthcareServices },
    { title: "Education & eLearning", services: educationServices },
    { title: "Food & Restaurant", services: foodServices },
    { title: "Creative & Portfolio", services: creativeServices },
    { title: "Media & Community", services: mediaServices },
    { title: "Non-Profit & Social", services: nonprofitServices }
];
