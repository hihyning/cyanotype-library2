// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalImage = modal.querySelector('.modal-image');
    const modalText = modal.querySelector('.modal-text');
    const gridItems = document.querySelectorAll('.grid-item');

    // Open modal on grid item click
    gridItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const img = this.querySelector('img');
            const overlayText = this.querySelector('.overlay-text');
            
            // Set modal image source
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            
            // Set modal text (preserving HTML including links)
            if (overlayText) {
                modalText.innerHTML = overlayText.innerHTML;
                // Preserve inline styles if any
                const italicStyle = overlayText.getAttribute('style');
                if (italicStyle) {
                    modalText.setAttribute('style', italicStyle);
                }
            } else {
                modalText.innerHTML = '';
            }
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when clicking on backdrop
    modalBackdrop.addEventListener('click', function(e) {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Close modal when clicking outside modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

