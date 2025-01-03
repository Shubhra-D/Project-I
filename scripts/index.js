







//shuttering
document.addEventListener("DOMContentLoaded", () => {
    const nnewLink = document.getElementById("nnew");
    const shutter = document.querySelector(".shutter-new");
    const closeShutter = document.getElementById("close-shutter");
  
    // Initially set the shutter height to 0
    shutter.style.height = "0";
    shutter.style.overflow = "hidden";
    shutter.style.transition = "height 0.5s ease";
  
    // Function to open the shutter
    const openShutter = () => {
      const contentHeight = shutter.scrollHeight; // Get the full height of the shutter content
      shutter.style.height = contentHeight + "px";
    };
  
    // Function to close the shutter
    const closeShutterEffect = () => {
      shutter.style.height = "0";
    };
  
    // Open the shutter when clicking "New"
    nnewLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (shutter.style.height === "0px" || shutter.style.height === "") {
        openShutter();
      } else {
        closeShutterEffect();
      }
    });
  
    // Close the shutter when clicking the close button
    closeShutter.addEventListener("click", (e) => {
      e.preventDefault();
      closeShutterEffect();
    });
  });
  


//Modal code of user/login /sign up page
