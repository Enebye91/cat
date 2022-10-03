// Den gør ikke noget, men SKAL være der! 
f// for at være installable. 

self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request)); 
}); 