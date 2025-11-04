document.getElementById("navbar").innerHTML +=
`
<nav>
            <div class="logo">
            <img  src="img/Rectangle.svg" alt=""></div>
            
            <ul id="nav">
                
            </ul>

            <div class="headtog">
                <div class="signup">Sign Up</div>
                <div id="togglemode" class="togglemode">
                    <div class="bg">
                        <div class="darksel">
                        <div class="iconon"></div>
                        </div>
                        <div class="iconoff"></div>
                    </div>
                </div>
            </div>
        </nav>
`;

let nav = ["Home", "Categories" , "Brands" , "About"];

document.getElementById("nav").innerHTML +=
`
<li class="selected"><a href="">${nav[0]}</a></li>
                <li><a href="">${nav[1]}</a></li>
                <li><a href="">${nav[2]}</a></li>
                <li><a href="">${nav[3]}</a></li>
`;
function copyFunc(id) {
  document.getElementById(id).innerHTML = "Copied ✅";
};

document.getElementById("togglemode").addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})

document.getElementById("hero").innerHTML +=
`
    <div class="heroimg">
                <h1>SAVE BIG TODAY</h1>
            </div>
            <div class="searchcta">
                <div class="searchbar2">
                    <input type="text" name="" id="searchbar" value="Search for deals, brands, or categories...">
                    <div class="searchicon">
                        <img src="img/search.svg" alt="">
                    </div>
                </div>

                  <a href="#section3" class="maincta">
                CHECK DEALS
            </a>
            </div>

`;

let cards = [
    {
        title: "McDonald's Egypt",
        deet: "Get 40% off your next order",
        code: "MCDO40",
    },
    {
        title: "Jumia Egypt",
        deet: "Free delivery on orders over 200 EGP",
        code: "FREESHIP",
    },
    {
        title: "Carrefour Egypt",
        deet: "25% off groceries and household items",
        code: "GROCERY25",
    }

];


document.getElementById("section2").innerHTML +=
`
    <div class="sectxt">
                <h2>Popular Coupons</h2>
                <h6>Copy these codes and start saving instantly</h6>
            </div>

            <div id="cards" class="cards">
                
            </div>

`;
for ( i = 0; i < cards.length; i++){
    document.getElementById("cards").innerHTML +=
    `
    <div class="card">
                    <h4>${cards[i].title}</h4>
                    <h5>${cards[i].deet}</h5>
                    <div class="code">
                       ${cards[i].code}
                    </div>
                     <div id="copy${i}" class="copy" onclick="copyFunc('copy${i}')">
                        <img src="img/copy.svg" alt="">
                        Copy Code
                    </div>
                </div>
    
    `};


    function increase(numid){
    let num = document.getElementById(numid).innerHTML;
    document.getElementById(numid).innerHTML = ++num;
   };


   function decrease(numid){
    let num = document.getElementById(numid).innerHTML;
    document.getElementById(numid).innerHTML = --num;
   };
   document.getElementById("section3").innerHTML +=
   `
     <div class="sectxt">
                <h2>Hot Deals Today</h2>
                <h6>Limited time offers that you don't want to miss!</h6>
            </div>
            <div id="offers" class="offers">
                
            </div>
       
   `
   let offers = [
    {
        offerimg : "img/img.png",
        disc: "70% OFF",
        expiry: "Expires in 2 days",
        title: "Food Delivery Feast",
        desc:"Get 70% off your first order from top restaurants in Cairo",
        price: "299 EGP"
    },
      {
        offerimg : "img/img-1.png",
        disc: "50% OFF",
        expiry: "Limited Stock",
        title: "Fashion Week Sale",
        desc:"Trendy clothes and accessories for the modern Egyptian",
        price: "599 EGP"
    },
      {
        offerimg : "img/img-2.png",
        disc: "60% OFF",
        expiry: "This Weekend",
        title: "Weekend Getaway",
        desc:"Explore Egypt's hidden gems with exclusive travel deals",
        price: "1,299 EGP"
    }
   ]

   for ( i = 0; i < offers.length; i++){
    document.getElementById("offers").innerHTML +=
    `
    <div class="offer">
        <img src="${offers[i].offerimg}" alt="">
        <div class="offercont">
            <div class="row1">
                <div class="disc">${offers[i].disc}</div>
                <span>${offers[i].expiry}</span>
            </div>

            <div class="row2">
                <h3>${offers[i].title}</h3>
                <p>${offers[i].desc}</p>
            </div>

            <div class="row3">
                <h4>${offers[i].price}</h4>
                <div class="pricecounter">
                    <button class="remove" onclick="decrease('number${i}')"><img src="img/-.svg" alt=""></button>
                    <span id="number${i}">0</span>
                    <button class="add" onclick="increase('number${i}')"><img src="img/+.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>

    `};
   document.getElementById("section4").innerHTML +=
   `
 <div class="sectxt">
                <h2>Browse Categories</h2>
                <h6>Find deals in your favorite categories</h6>
            </div>

            <div id="categories" class="categories">
                
            </div>

   `

    let categories = [
        {
            img : "img/div.svg",
            title : "Restaurants"
        },
         {
            img : "img/div-1.svg",
            title : "Fashion"
        },
         {
            img : "img/div-2.svg",
            title : "Travel"
        },
         {
            img : "img/div-3.svg",
            title : "Electronics"
        },
         {
            img : "img/div-4.svg",
            title : "Beauty"
        },
         {
            img : "img/div-5.svg",
            title : "Sports"
        }
    ];

       for ( i = 0; i < categories.length; i++){
    document.getElementById("categories").innerHTML +=
    `
    <div class="category">
                    <img src="${categories[i].img}" alt="">
                    <h5>${categories[i].title}</h5>
                </div>
    `};

   document.getElementById("section5").innerHTML +=
   `
   <div class="sectxt">
                <h2>Top Partner Brands</h2>
                <h6>Trusted by Egypt's favorite brands</h6>
            </div>

            <div class="brands">
                <div class="brandcont">
                    <img src="img/Frame 15.svg" alt="">
                    <img src="img/Frame 16.svg" alt="">
                    <img src="img/Frame 17.svg" alt="">
                    <img src="img/Frame 18.svg" alt="">
                    <img src="img/Frame 19.svg" alt="">
                    <img src="img/Frame 20.svg" alt="">
                    <img src="img/Frame 21.svg" alt="">
                    <img src="img/Frame 22.svg" alt="">
                    <img src="img/Frame 23.svg" alt="">
                    <img src="img/Frame 15.svg" alt="">
                    <img src="img/Frame 16.svg" alt="">
                    <img src="img/Frame 17.svg" alt="">
                    <img src="img/Frame 18.svg" alt="">
                    <img src="img/Frame 19.svg" alt="">
                    <img src="img/Frame 20.svg" alt="">
                    <img src="img/Frame 21.svg" alt="">
                    <img src="img/Frame 22.svg" alt="">
                    <img src="img/Frame 23.svg" alt="">
                </div>
            </div>
   `

      document.getElementById("footer").innerHTML +=
      `
       <div class="footcontent">
            <div class="footcol">
                <h5>WAFARLY</h5>
                <p>Your ultimate destination for the best deals and discounts in Egypt.</p>
                <img src="img/footicons.svg" alt="">
            </div>
            <div class="footcol">
                <h5>Quick Links</h5>
                <div class="links">
                <a href="">About Us</a>
                <a href="">Categories</a>
                <a href="">Hot Deals</a>
                <a href="">Coupons</a>
                </div>
            </div>
             <div class="footcol">
                <h5>Support</h5>
                <div class="links">
                <a href="">Help Center</a>
                <a href="">Contact Us</a>
                <a href="">Terms of Service</a>
                <a href="">Privacy Policy</a>
                </div>
            </div>

             <div class="footcol">
                <h5>Contact Info</h5>
                <div class="icontxt">
                    <img src="img/locfoot.svg" alt="">
                    <p>Nasr City, Cairo, Egypt</p>
                </div>
                 <div class="icontxt">
                    <img src="img/call.svg" alt="">
                    <p>+20 2 2345 6789</p>
                </div>
                 <div class="icontxt">
                    <img src="img/mai.svg" alt="">
                    <p>info@wafarly.org.eg</p>
                </div>
            </div>
        </div>
        <span>© 2024 EgyptDeals. All rights reserved. Made with Love in Egypt</span>

      
      `;

        let text = ["CATCH 50% OFF ON GROCERIES", "CATCH 20% OFF ON FASHION", "CATCH 70% OFF ON BEAUTY","CATCH 50% OFF ON TRAVEL"];
        let randad = Math.floor(Math.random()*text.length);
        document.getElementById("ad").innerHTML = (text[randad]);

        function closeAds(){
            document.getElementById("randompopup").style.display = "none";
        }