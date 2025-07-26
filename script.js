
document.querySelectorAll('.open-in-new-tab').forEach(function(link) {
    link.setAttribute('target', '_blank');
});
document.getElementById("change-contact").addEventListener("click", function () {

    const parentContainer = this.parentElement;
    
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/jeremias-lukas-aechtner-437a95264";
    link.target = "_blank"; 
    link.textContent = "LinkedIn ->"; 
    link.id = "visit-my-linkedin"; 
    const oldWidth = this.offsetWidth;
    console.log(oldWidth);
    const oldGap = parseFloat(window.getComputedStyle(parentContainer).gap);
    console.log(oldGap);
    this.replaceWith(link);

    setTimeout(() => {

        const newWidth = link.offsetWidth; 
        console.log("New link width:", newWidth);
        let newGap = `${((oldGap*2)-(newWidth-oldWidth))/2}`;
        console.log(newGap);

        if (newGap < 0) {
            const oldPadding = parseFloat(window.getComputedStyle(parentContainer).padding);
            console.log("ols Padding: ", oldPadding);
            let newPadding;
            if (Math.abs(newGap) > oldPadding) {
                newPadding = "0px";
            } else {
                console.log("gap is lower padding");
                newPadding = `${oldPadding - Math.abs(newGap)}px`
            }
            parentContainer.style.paddingLeft = newPadding;
            parentContainer.style.paddingRight = newPadding;
            newGap = 0;
        }
        parentContainer.style.gap = `${newGap}px`; 
    }, 0);


});
const details = document.getElementById('myDetails');
const summary = details.querySelector('summary');

details.addEventListener('toggle', () => {
summary.textContent = details.open ? 'Collapse' : 'Unfold Abstract';
});
const details_collapsible = document.querySelector('.collapsible');
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

function loadVideo(el) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "300");
    iframe.setAttribute("height", "169");
    iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/-uB6Kxr-nik?rel=0&modestbranding=1&autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.setAttribute("allowfullscreen", "");
    el.replaceWith(iframe);
}