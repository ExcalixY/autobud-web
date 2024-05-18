function changeAdv(element, speed) {

    var titleElement = document.getElementById("mobile_whyUs_advTitle");
    var descElement = document.getElementById("mobile_whyUs_advDesc");

    switch (element) {
        case 1:
            var title = "Fast";
            var desc = "High-quality information provided promptly.\n";

            animation(speed, title, desc, titleElement, descElement);
            break;
        case 2:
            var title  = "Free";
            var desc  = "Enjoy all app features at no cost, without any in-app subscriptions or purchases.";

            animation(speed, title, desc, titleElement, descElement);
            break;
        case 3:
            var title  = "Simple";
            var desc  = "Easy-to-understand information presented in a simplified way.";

            animation(speed, title, desc, titleElement, descElement);
            break;
        default:
            var title  = "Fast";
            var desc  = "High-quality information provided promptly.";
            
            animation(speed, title, desc, titleElement, descElement);
            break;
    }
}

function animation(speed, title, desc, titleElement, descElement) {

    var animSpeed = speed / (desc.length + title.length) * 1000;

    titleElement.innerHTML = "‎";
    descElement.innerHTML = "‎";

    for (let i = 0; i < title.length; i++) {
        setTimeout(() => { titleElement.innerHTML += title.charAt(i) }, animSpeed * i);
    }
    


    for (let i = 0; i < desc.length; i++) {
        setTimeout(() => { descElement.innerHTML += desc.charAt(i) }, animSpeed * i);
    }
}