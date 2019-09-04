document.querySelectorAll(".post").forEach(function(el) {
    // Now do something with my button
    let widget_height = Math.floor(Math.random() * 500) + 20;
    el.style.height = widget_height.toString() + "px"; 
});

document.querySelectorAll(".widget").forEach(function(el) {
    // Now do something with my button
    let widget_height = Math.floor(Math.random() * 200) + 20;
    el.style.height = widget_height.toString() + "px"; 
});