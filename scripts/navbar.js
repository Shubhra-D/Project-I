
const navbar = `<div id="first">
        <p>
          Update your closet with deals upto 70% off.<span
            ><a href="" style="font-weight: bold;">Get Winter Style </a></span
          >
        </p>
      </div>
      <div id="icons">
        <img
          src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg"
          alt="logo"
        />
        <form id="search-panel">
            <input class="search-bar" type="text" placeholder="Search for Shoes ,Clothes,etc." />
            <button class="search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div id="side-icons">
          <a class="user" href=""><i class="fa-solid fa-user"></i></a>
          <a href="" class="user-bag"><i class="fa-solid fa-bag-shopping"></i></a>
        </div>
        
      </div>
      <div id="nav-links">
        <div id="left">
           <a href="">New</a>
           <a href="">Women</a>
           <a href="">Men</a>
           <a href="">Kids</a>
           <a href="">Collection</a>
            <a href="">Brands</a>
           <a href="">sale</a>
           <a href="">Activities</a>
        </div>
        <div id="right">
          <a href="">Help & Support</a>
        </div>
      </div>`
    document.getElementById("nav") .innerHTML = navbar