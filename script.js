document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace(/© \d{4}/, `© ${currentYear}`);
    }
    console.log('网站加载完成！');
});
