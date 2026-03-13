# Current Implementation Plan: Restoration & Auto-Sharing

This plan documents the completed work to restore system separation and the new automatic sharing features.

## 1. Restoration of Partnership Separation (COMPLETED)

We have reverted the unified user system to maintain strict isolation between Affiliate and Referral partners.

### Backend Changes:
- **`register.php`**: Now inserts into separate `affiliate_users` and `referral_users` tables.
- **`add_sale.php`**: Manual sale recording now independently queries both partner tables.
- **`record_automated_sale.php`**: Automated recording validates partners in their specific tables.
- **`functions.php`**: Helper functions now correctly target specific tables for ID generation and email checks.

---

## 2. Automatic Service Sharing System (COMPLETED)

New system for automatic lead capture and partner attribution through deep-links.

### Redirection & Capture:
- **`partnership/services.php`**: Generates links pointing to `track.php` with `service`, `aff`, or `ref` params.
- **`partnership/track.php`**: Handler that logs clicks, sets a 30-day cookie (`es_ref_data`), and redirects to the React service page.
- **`usePartnerTracking.ts`**: New React hook that handles cookie reads/writes and automated commission recording.
- **Global Tracker**: Integrated into `App.tsx` via `PartnerTracker.tsx` to ensure lead capture on any entry page.

### Automatic Recording:
- **`Pricing.tsx`**: Payment successful handler now automatically triggers `recordCommission` using the stored partner data.
- **`GrowthServices.tsx`**: Updated to support the same automatic commission recording.

---

## ✅ Verification Completed
- [x] Affiliate and Referral tables are isolated.
- [x] Login/Signup works for respective tables.
- [x] Deep-links correctly attribute sales to partners.
- [x] Commissions are recorded automatically in the correct table.
