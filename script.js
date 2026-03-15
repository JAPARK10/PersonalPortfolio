
document.querySelectorAll('.open-in-new-tab').forEach(function (link) {
    link.setAttribute('target', '_blank');
});

const details = document.getElementById('myDetails');
const summary = details.querySelector('summary');

if (details && summary) {
    details.addEventListener('toggle', () => {
        summary.textContent = details.open ? 'Collapse' : 'Unfold Abstract';
    });
}

const details_collapsible = document.querySelector('.collapsible');
if (details_collapsible) {
    const content = details_collapsible.querySelector('.content');
    details_collapsible.addEventListener('toggle', () => {
        if (details_collapsible.open) {
            const height = content.scrollHeight;
            content.style.height = height + "px";
            setTimeout(() => content.style.height = "auto", 300);
        } else {
            content.style.height = content.scrollHeight + "px";
            requestAnimationFrame(() => content.style.height = "0px");
        }
    });
}

function loadVideo(el) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "300");
    iframe.setAttribute("height", "169");
    iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/-uB6Kxr-nik?rel=0&modestbranding=1&autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.borderRadius = "8px";
    iframe.style.border = "1.5px solid rgb(66, 66, 66)";
    el.replaceWith(iframe);
}

// Lightbox logic
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('click', (e) => {
        // Don't open lightbox if clicking links inside grid (though images aren't links)
        lightboxImg.src = img.src;
        lightboxOverlay.style.display = 'flex';
    });
});

lightboxOverlay.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightboxOverlay.style.display = 'none';
    }
});

lightboxClose.addEventListener('click', () => {
    lightboxOverlay.style.display = 'none';
});