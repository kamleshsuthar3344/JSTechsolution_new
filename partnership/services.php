<?php
require_once 'includes/dashboard_header.php';

// Fetch services from DB
$stmt = $db->query("SELECT * FROM services");
$services = $stmt->fetchAll();
?>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<div class="w-full">
    <!-- Hero Section (Copied Style) -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 px-6 rounded-3xl mb-10 overflow-hidden shadow-xl mx-4 mt-4">
        <!-- Animated Background Effects -->
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 2%, transparent 20%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 1%, transparent 25%);"></div>
        </div>

        <div class="relative z-10 text-center">
            <div class="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <i data-lucide="sparkles" class="h-4 w-4"></i>
                <span>Promote & Earn</span>
            </div>

            <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Share Professional Services <br />
                <span class="text-yellow-400">Earn Commissions</span>
            </h1>

            <p class="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Choose a service below, copy your unique referral link, and start earning whenever a new user purchases through your link.
            </p>
        </div>
    </section>

    <!-- Services Grid -->
    <div class="px-4 pb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 px-2">Available Services to Share</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <?php foreach ($services as $service): ?>
                <?php
                // Map DB icon names to Lucide icons
                $icon = strtolower($service['icon_name'] ?? 'monitor');
                // Adjust some mappings if needed
                if ($icon == 'monitor') $icon = 'monitor';
                if ($icon == 'megaphone') $icon = 'megaphone';
                if ($icon == 'search') $icon = 'search';
                if ($icon == 'shoppingbag') $icon = 'shopping-bag';
                if ($icon == 'globe') $icon = 'globe';
                if ($icon == 'pentool') $icon = 'pen-tool';
                if ($icon == 'link') $icon = 'link';
                if ($icon == 'rocket') $icon = 'rocket';
                if ($icon == 'smartphone') $icon = 'smartphone';

                // Generate Link
                // Generate Link for "Share This Service" Catalog Page
                // We point to the new PricingRefer page with the partner code and category
                $service_slug = $service['slug'] ?? 'website-development';
                $share_link = "https://earningsharthi.in/partnership/track.php";
                
                $params = [
                    'service' => $service_slug
                ];

                if ($role == 'affiliate') {
                    $params['aff'] = $_SESSION['affiliate_id'] ?? '';
                } else {
                    $params['ref'] = $_SESSION['referral_code'] ?? '';
                }
                
                $share_link .= '?' . http_build_query($params);
                ?>
                <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4 group">
                    <div class="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                        <i data-lucide="<?php echo $icon; ?>" class="h-7 w-7"></i>
                    </div>
                    
                    <h3 class="font-bold text-lg text-gray-900"><?php echo htmlspecialchars($service['name']); ?></h3>
                    
                    <p class="text-sm text-gray-500 line-clamp-2">
                        <?php echo htmlspecialchars($service['description'] ?: 'Professional ' . $service['name'] . ' services.'); ?>
                    </p>

                    <div class="w-full mt-auto pt-4">
                        <a href="<?php echo $share_link; ?>" target="_blank"
                           class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                            Share this Service
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<script>
    lucide.createIcons();

    function copyToClipboard(elementId) {
        var copyText = document.getElementById(elementId);
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        
        navigator.clipboard.writeText(copyText.value).then(function() {
            // Visual feedback could be added here
            alert("Link copied to clipboard!");
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
</script>

<?php 
// Close main tag from dashboard_header (if it was opened there)
// dashboard_header.php opens <main class="main-content"> ...header... 
// It does NOT close main. So we should close it here or in footer.
?>
</main>
</div>
</body>
</html>
