// gsap.to(".rotaingcontainer", { duration: 3, rotate: 360 })

// Rotate the container
gsap.to(".rotaingcontainer", {
    y: 70, x: 170,
    duration: 3,
    rotate: 360,
    onUpdate: function() {
        // Get the current rotation of the container
        const rotation = gsap.getProperty(".rotaingcontainer", "rotate");
        // Apply the opposite rotation to the image
        gsap.set(".no-rotate", { rotate: -rotation });
    }
});
