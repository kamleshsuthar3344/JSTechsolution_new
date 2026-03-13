<?php
require_once 'includes/dashboard_header.php';
?>

<h1 style="margin-bottom: 20px;">Marketing Resources</h1>
<p style="margin-bottom: 30px; color: #6b7280;">Use these materials to promote Earning Sharthi and earn commissions.</p>

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
    <!-- Asset 1: Brand Logo -->
    <div class="card">
        <h3>Official Logo</h3>
        <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">Use our official logo on your website or social media posts.</p>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <img src="../public/logo.png" alt="Earning Sharthi Logo" style="max-height: 60px;">
        </div>
        <a href="../public/logo.png" download class="btn btn-secondary" style="width: 100%; text-align: center;">Download Logo</a>
    </div>

    <!-- Asset 2: Promo Post -->
    <div class="card">
        <h3>Earning Sharthi Promo Post</h3>
        <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">Save this image to share on Instagram or WhatsApp status.</p>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
             <span style="color: #9ca3af; font-size: 12px;">Promo Banner Placeholder</span>
        </div>
        <button class="btn btn-secondary" style="width: 100%;" onclick="alert('Image coming soon!')">Download Banner</button>
    </div>
</div>

<div class="card" style="margin-top: 40px;">
    <h3>Promotional Text</h3>
    <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">Copy and paste this text into your social media captions.</p>
    
    <div style="margin-bottom: 20px;">
        <label style="font-weight: 600; font-size: 14px;">Option 1: General Promotion</label>
        <div class="link-box" style="margin-top: 10px;">
            <code style="font-size: 13px;">🚀 Grow your business with Earning Sharthi! Get premium website design, SEO, and digital marketing services at affordable rates. Check it out here: [Your Link]</code>
            <button class="copy-btn" onclick="copyText(this)">Copy</button>
        </div>
    </div>

    <div>
        <label style="font-weight: 600; font-size: 14px;">Option 2: Partnership Invitation</label>
        <div class="link-box" style="margin-top: 10px;">
            <code style="font-size: 13px;">Join the Earning Sharthi Partnership program and start earning up to 15% commission on website sales! Sign up here: [Your Link]</code>
            <button class="copy-btn" onclick="copyText(this)">Copy</button>
        </div>
    </div>
</div>

<script>
function copyText(btn) {
    const text = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(text);
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = originalText, 2000);
}
</script>

</main>
</div>
</body>
</html>
