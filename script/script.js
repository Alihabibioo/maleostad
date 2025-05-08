document.getElementById("free-features").style.display = "block";
function featureSelection(para) {
    switch (para) {
        case "free":
            // alert("free");
            document.getElementById("free-features").style.display="block";
            
            document.getElementById("standard-features").style.display="none";
            document.getElementById("premium-features").style.display="none";

            break;
        case "standard":
            document.getElementById("standard-features").style.display="block";
            
            document.getElementById("free-features").style.display="none";
            document.getElementById("premium-features").style.display="none";
            break;
        case "premium":
            // alert("premium");
            document.getElementById("premium-features").style.display="block";
            
            document.getElementById("free-features").style.display="none";
            document.getElementById("standard-features").style.display="none";
            break;
        default:
            break;
    }}