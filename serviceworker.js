// Den gør ikke noget, men SKAL være der! 

self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request)); 
}); 