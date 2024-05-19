var animSpeed = 0;
var curElement = 1;

function changeTeamMem(element) {

    var imgElement = document.getElementsByClassName("mobile_team_memImg")[0];
    var titleElement = document.getElementsByClassName("mobile_team_memName")[0];
    var descElement = document.getElementsByClassName("mobile_team_memDesc1")[0];

    var speed = 1000;

    if (curElement == 1 && element == -1)
        curElement = 3;
    else if (curElement == 3 && element == 1)
        curElement = 1;
    else
        curElement += element;

    switch (curElement) {
        case 1:
            var title = "Edvinas Pauliūnas\nPresident";
            var desc = "Our team's President and the app's co-developer. He plays a key role in assigning team roles and fostering collaboration to achieve the shared goal of enhancing the lives of drivers.";
            animSpeed = 0;
            prevElement = 1;
            animation(speed, title, desc, titleElement, descElement);
            break;
        
        case 2:
            var title  = "Arnas Dzedravičius\nMarketing";
            var desc  = "Tasked with developing and executing marketing plans. His imaginative approach and strong analytical abilities drive the success of marketing initiatives.";
            animSpeed = 0;
            prevElement = 2;
            animation(speed, title, desc, titleElement, descElement);
            break;
        
        case 3:
            var title  = "Renaldas Želichovskij\nDeveloper";
            var desc  = "Renaldas never shies away from a challenge. His software engineering and problem-solving skills make him an indispensable asset to the entire Junior company.";
            animSpeed = 0;
            prevElement = 3;
            animation(speed, title, desc, titleElement, descElement);
            break;

        default:
            var title  = "Edvinas Pauliūnas\nPresident";
            var desc  = "Our team's President and the app's co-developer. He plays a key role in assigning team roles and fostering collaboration to achieve the shared goal of enhancing the lives of drivers.";
            animSpeed = 0;
            prevElement = 1;
            animation(speed, title, desc, titleElement, descElement);
            break;
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