


function main() {
    var d = new Date();
    var n = d.getDay();
    
    document.getElementById("opening-" + n).style.color= "#2b8242";
    document.getElementById("opening-time-" + n).style.color = "#2b8242";
}

main()