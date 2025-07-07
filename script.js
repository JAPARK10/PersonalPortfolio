// script.js
document.querySelectorAll('.open-in-new-tab').forEach(function(link) {
    link.setAttribute('target', '_blank');
});
document.getElementById("change-contact").addEventListener("click", function () {

    const parentContainer = this.parentElement;
    // Create a new <a> element
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/jeremias-lukas-aechtner-437a95264";
    link.target = "_blank"; // Open in a new tab
    link.textContent = "LinkedIn ->"; // New content
    link.id = "visit-my-linkedin"; // Copy button's classes if needed
    const oldWidth = this.offsetWidth;
    console.log(oldWidth);
    const oldGap = parseFloat(window.getComputedStyle(parentContainer).gap);
    console.log(oldGap);

    // Replace the button with the <a> element
    this.replaceWith(link);

    // Wait for the link to be rendered before extracting its width
    setTimeout(() => {

        const newWidth = link.offsetWidth; // or link.getBoundingClientRect().width
        console.log("New link width:", newWidth);
        let newGap = `${((oldGap*2)-(newWidth-oldWidth))/2}`;
        console.log(newGap);
        
        // Now you can use the width to calculate something or apply styles
        // Example: Update parent container's width based on the new link width
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
        parentContainer.style.gap = `${newGap}px`; // Dynamically set the gap based on width
    }, 0); // Using setTimeout to ensure the link is fully rendered before accessing its width


});
const details = document.getElementById('myDetails');
const summary = details.querySelector('summary');

// Listen for the native toggle event on <details>
details.addEventListener('toggle', () => {
summary.textContent = details.open ? 'Collapse' : 'Unfold Abstract';
});
const details_collapsible = document.querySelector('.collapsible');
const content = details_collapsible.querySelector('.content');

details_collapsible.addEventListener('toggle', () => {
if (details_collapsible.open) {
    const height = content.scrollHeight;
    content.style.height = height + "px";
    setTimeout(() => content.style.height = "auto", 300); // reset after animation
} else {
    content.style.height = content.scrollHeight + "px"; // set fixed height first
    requestAnimationFrame(() => content.style.height = "0px");
}
});