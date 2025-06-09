 const button = document.querySelector(".theme-toggle");
  const rays = document.querySelector(".theme-toggle__classic g g");
  const circle = document.querySelector(".theme-toggle__classic circle");
  let isDark = false;

  button.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.toggle("dark");

    // Animate rays to spin around the center (16,16) and fade
    anime({
      targets: rays,
      rotate: isDark ? 360 : 0,
      opacity: isDark ? 0 : 1,
      duration: 800,
      easing: 'easeInOutCubic',
      transformOrigin: '50% 50%', // this won't work for SVG
      update: anim => {
        // Force transform-origin via transform attribute
        rays.setAttribute("transform", `rotate(${anim.animations[0].currentValue} 16 16)`);
      }
    });


  });