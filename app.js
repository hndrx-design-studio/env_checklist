document.addEventListener("DOMContentLoaded", function() {
    // Get all checkboxes on the page
    let checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkbox"]');
    console.log(`checkboxes: ${checkboxes.length}`);

    // Update progress bar initially
    updateProgressBar();

    // Attach event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            updateProgressBar();
        });
    });

    function updateProgressBar() {
        // Get number of checkboxes that are checked
        let checkedBoxes = document.querySelectorAll('input[type="checkbox"][name="checkbox"]:checked').length;
        console.log(`checkedBoxes: ${checkedBoxes}`);

        // Calculate the percentage
        let percentage = (checkedBoxes / checkboxes.length) * 100;

        // Update the progress bar
        let progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = percentage + '%';

        // Update the text content and color of #progress-text
        let progressText = document.querySelector('#progress-text');
        progressText.textContent = Math.round(percentage) + '%'; // You can use Math.round() to round off the value

        console.log(percentage);

        // Set color based on the percentage value
        if (percentage === 0) {
            progressText.style.color = '#3f4450';
        } else {
            progressText.style.color = 'white';
        }
    }
});