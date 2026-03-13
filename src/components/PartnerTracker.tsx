import React from 'react';
import { usePartnerTracking } from '../hooks/usePartnerTracking';

/**
 * Silent component to be placed at the top of the App
 * to ensure we capture ref/aff codes on any page.
 */
const PartnerTracker: React.FC = () => {
    usePartnerTracking();
    return null;
};

export default PartnerTracker;
