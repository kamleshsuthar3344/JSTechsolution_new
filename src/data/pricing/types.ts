import React from 'react';

export interface Plan {
    name: string;
    price: string;
    originalPrice?: string;
    currentPrice: number;
    popular: boolean;
    badge: string | null;
    features: string[];
    duration?: string;
    icon?: React.ReactNode;
}

export interface ServiceCategory {
    category: string;
    plans: Plan[];
    icon?: React.ReactNode;
}

export interface IndustryGroup {
    title: string;
    services: ServiceCategory[];
}

export interface AcademyCourse {
    title: string;
    price: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    borderColor: string;
}

export interface GrowthService {
    id: string;
    name: string;
    price: number;
    min: number;
    max: number;
    description: string;
    features: string[];
    icon: React.ReactNode;
    category: string;
}
