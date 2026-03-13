import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePartnerTracking = () => {
    const [searchParams] = useSearchParams();

    const getCookie = (name: string): string | null => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
        return null;
    };

    const setCookie = (name: string, value: string, days: number = 30) => {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
    };

    useEffect(() => {
        const ref = searchParams.get('ref');
        const aff = searchParams.get('aff');

        if (ref) {
            setCookie('es_referral', ref);
        }
        if (aff) {
            setCookie('es_affiliate', aff);
        }
    }, [searchParams]);

    const recordCommission = useCallback(async (amount: number, serviceName: string, paymentId: string) => {
        const affiliateId = getCookie('es_affiliate');
        const referralCode = getCookie('es_referral');

        if (affiliateId || referralCode) {
            try {
                await fetch('https://www.JSTECHSOLUTION.in/partnership/api/record_automated_sale.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        affiliate_id: affiliateId,
                        referral_code: referralCode,
                        amount: amount,
                        service_name: serviceName,
                        payment_id: paymentId
                    })
                });
                console.log('Commission recorded successfully');
            } catch (error) {
                console.error('Failed to record commission:', error);
            }
        }
    }, []);

    return { recordCommission, getCookie };
};
