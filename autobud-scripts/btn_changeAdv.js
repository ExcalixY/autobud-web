var animSpeed = 0;
var prevElement = 1;

function changeAdv(element, speed) {

    var titleElement = document.getElementById("mobile_whyUs_advTitle");
    var descElement = document.getElementById("mobile_whyUs_advDesc");

    if (prevElement != element) {
        switch (element) {
            case 1:
                var title = "Fast";
                var desc = "High-quality information provided promptly.\n";
                animSpeed = 0;
                prevElement = 1;
                animation(speed, title, desc, titleElement, descElement);
                break;
            
            case 2:
                var title  = "Free";
                var desc  = "Enjoy all app features at no cost, without any in-app subscriptions or purchases.";
                animSpeed = 0;
                prevElement = 2;
                animation(speed, title, desc, titleElement, descElement);
                break;
            
            case 3:
                var title  = "Simple";
                var desc  = "Easy-to-understand information presented in a simplified way.";
                animSpeed = 0;
                prevElement = 3;
                animation(speed, title, desc, titleElement, descElement);
                break;

            default:
                var title  = "Fast";
                var desc  = "High-quality information provided promptly.";
                animSpeed = 0;
                prevElement = 1;
                animation(speed, title, desc, titleElement, descElement);
                break;
        }
    }
}

function animation(speed, title, desc, titleElement, descElement) {
    // Clear existing animation
    clearTimeout(titleElement.animationTimeout);
    clearTimeout(descElement.animationTimeout);

    // Calculate deletion speed
    var deletionSpeed = speed / titleElement.textContent.length;

    // Start deletion animation for title
    var titleDeletionIndex = titleElement.textContent.length;
    function deleteTitle() {
        if (titleDeletionIndex > 0) {
            titleElement.textContent = titleElement.textContent.slice(0, -1);
            titleDeletionIndex--;
            titleElement.animationTimeout = setTimeout(deleteTitle, deletionSpeed);
        } else {
            // Start typing animation for title after deletion
            var typingSpeed = speed / title.length;
            var titleIndex = 0;
            function typeTitle() {
                if (titleIndex < title.length) {
                    titleElement.textContent += title.charAt(titleIndex);
                    titleIndex++;
                    titleElement.animationTimeout = setTimeout(typeTitle, typingSpeed);
                }
            }
            typeTitle();
        }
    }
    deleteTitle();

    // Calculate deletion speed
    var descDeletionSpeed = speed / descElement.textContent.length;

    // Start deletion animation for description
    var descDeletionIndex = descElement.textContent.length;
    function deleteDesc() {
        if (descDeletionIndex > 0) {
            descElement.textContent = descElement.textContent.slice(0, -1);
            descDeletionIndex--;
            descElement.animationTimeout = setTimeout(deleteDesc, descDeletionSpeed);
        } else {
            // Start typing animation for description after deletion
            var descTypingSpeed = speed / desc.length;
            var descIndex = 0;
            function typeDesc() {
                if (descIndex < desc.length) {
                    descElement.textContent += desc.charAt(descIndex);
                    descIndex++;
                    descElement.animationTimeout = setTimeout(typeDesc, descTypingSpeed);
                }
            }
            typeDesc();
        }
    }
    deleteDesc();
}