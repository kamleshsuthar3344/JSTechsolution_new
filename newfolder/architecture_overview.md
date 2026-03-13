# Architecture Overview: Same Server Setup

The question was: **"Do we need a separate server for the backend, or can we host it on the same server?"**

## The Answer:
**No, you do not need a separate server.** You can host both the React frontend and the PHP/MySQL backend on the same cPanel server (`host9.cloudindianserver.com`).

## How it Works:
1.  **Static Files (React):** Your React app (built with Vite) lives in the root of `public_html`. It serves static HTML/JS/CSS files.
2.  **Dynamic Files (PHP):** You can create a subfolder (e.g., `/partnership/`) inside `public_html`. Any `.php` file placed there will be executed by the server's PHP engine.
3.  **Database (MySQL):** cPanel provides unlimited (or high limit) MySQL databases that both systems can theoretically use, though they will logically be separate in this case.

## Benefits of Same Server Setup:
*   **Cost Effective:** No need for a second hosting plan.
*   **Simplified SSL:** Your existing SSL certificate for `earningsharthi.in` will cover the subfolders as well.
*   **SEO:** Having everything on the same domain (or subfolder) is generally better for SEO than using a separate subdomain.
*   **Ease of Linking:** You can use relative paths or simple direct links like `/partnership/affiliate.php`.

## Recommendation:
Keep the React app as the main frontend. Use the PHP subfolder specifically for the partner portal logic, dashboards, and database interactions that require a server-side language.
