
import { baseurl } from "./baseurl.js";



//shuttering of new
const newShutter = document.getElementById("newshutter");
  const newbox = document.getElementById("new-shuttering");

  newShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     newbox.classList.toggle("active");
  });

  //shuttering women
  const womenShutter = document.getElementById("womenshutter");
  const womenbox = document.getElementById("women-shuttering");

  womenShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     womenbox.classList.toggle("active");
  });
//shuttering of men
const menShutter = document.getElementById("menshutter");
  const menbox = document.getElementById("men-shuttering");

  menShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     menbox.classList.toggle("active");
  });
//shuttering of kids
const kidsShutter = document.getElementById("kidsshutter");
  const kidsbox = document.getElementById("kids-shuttering");

  kidsShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     kidsbox.classList.toggle("active");
  });
  //Collection Shutter
  const collectionShutter = document.getElementById("collectionshutter");
  const collectionbox = document.getElementById("collection-shuttering");

  collectionShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     collectionbox.classList.toggle("active");
  });
//brand shuttering
const brandShutter = document.getElementById("brandshutter");
  const brandbox = document.getElementById("brand-shuttering");

  brandShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     brandbox.classList.toggle("active");
  });


  //Shuttering of help and support
  const helpShutter = document.getElementById("helpshutter");
  const helpbox = document.getElementById("help-shuttering");

  helpShutter.addEventListener("click",(e)=>{
     e.preventDefault()
     helpbox.classList.toggle("active");
  });


//Modal code of user/login /sign up page
document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.querySelector("#side-icons .user");
    const userModal = document.getElementById("user-modal");
    console.log(userModal)
    const closeModal = document.getElementById("close-user-modal");

    //console.log(userIcon, userModal, closeModal);

    userIcon.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("User icon clicked");
      userModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      console.log("Close icon clicked");
      userModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === userModal) {
        console.log("Clicked outside modal");
        userModal.style.display = "none";
      }
    });
  });


let formContainer = document.getElementById("user-form-cont");
document.getElementById("signup").addEventListener("click",function(){
   window.location.href="signup.html"
  rendersignup();
});

const multiLogin = document.querySelectorAll(".login")
  multiLogin.forEach((e)=>{
        e.addEventListener("click",()=>{
          userModal.style.display = "none";
          renderLogin();
      });
    });


  function rendersignup(){
      document.getElementById("signup-form").addEventListener("submit",async(e)=>{
       e.preventDefault();
       const username = document.getElementById("username").value;
       const email = document.getElementById("useremail").value;
       const password = document.getElementById("password").value;
         let userdata = {username,email,password}
      try{
        const res = await fetch((`${baseurl}users`), {
          method: 'POST',
          headers: { 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify(userdata),
        });
        const data = await res.json();
        alert("Sign-Up Successful!"); 
      }catch(err) {
        console.log("err")
      }

   });



   document.getElementById("bhejlogin").addEventListener('click', renderlogin);
  }

  function renderLogin() {

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        const response = await fetch(`${baseurl}users`, {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json' 
            },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        alert('Login Successful!');
      } catch (err) {
        alert("err");
      }
    });

    document.getElementById("bhejlogin").addEventListener('click', rendersignup);
  }

























