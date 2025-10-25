function getPercentage() {
    let percentage = document.getElementById("percentage").value;
    console.log(percentage);
    let result = document.getElementById("result");
    console.log(result);
    result.style.width = percentage + "%";
    console.log(result);
    console.log(percentage + "%");
    
}