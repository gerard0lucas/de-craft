// Component Loader Script
// Dynamically loads navbar and footer, then notifies other scripts

document.addEventListener('DOMContentLoaded', function() {
    async function loadComponent(componentPath, targetElementId) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlContent = await response.text();
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                targetElement.innerHTML = htmlContent;
                return true;
            }
            console.error(`Target element with ID '${targetElementId}' not found`);
            return false;
        } catch (error) {
            console.error(`Error loading component from ${componentPath}:`, error);
            return false;
        }
    }

    Promise.all([
        loadComponent('components/navbar.html', 'navbar-container'),
        loadComponent('components/footer.html', 'footer-container')
    ]).then(function() {
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
        if (window.jQuery) {
            window.jQuery(document).trigger('componentsLoaded');
        }
    });
});
