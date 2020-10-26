import React from 'react'

function LandingPage() {
    return (
        <>
        <section>
    <div className = "log-in">
        
        <a href="">--Sign Up/Login--</a>
     </div>

        <div id="companyInfo">
        <h1 >About Our Store</h1>
        </div>
        <div className ="aboutContainer">
        <div className ="truckImage">
            <img src={"./img/img-woman.jpg"} alt={"image woman"}  height={"400px"} width ={"500px"} />
        </div>
        <p>
            We are an online marketplace to connect makers and their creations with shoppers looking for truly unique goods. Our collection has grown from Dave's craft show finds to thousands of designs 
            handpicked by our buying team, who search all year for creative finds from around the world!
        </p>
        
        </div>

        <div className ="aboutContainer2">
            <p className ="p2">
                We also discover unique pieces through online submissions from our community of artists and designers. Thanks to our in-house product development team, we create our own goods, too.
                Every design we carry incorporates elements of creativity.
            </p>
            
            <div className ="truckImage">
                <img src={"./img/people.gif"} alt={"food truck"} height={"400px"} width ={"500px"} />
            </div>
            
            
            </div>
            <h3 className="hashtag">#uniqueGifts</h3>
            <div className = "truckImages">
            <img src="./img/nytimes.jpg" alt="food truck1"width="320px" height="240px" />
            <img src="./img/glasses.jpg" alt="food truck2" width="320px" height="240px"/>
            <img src="./img/baseball.jpg" alt="food truck3"width="320px" height="240px"/>
            <img src="./img/cheeseBoard.jpg" alt="food truck4" width="320px" height="240px"/>
            <img src="./img/garden.jpg" alt="food truck5"width="320px" height="240px"/>
            <img src="./img/map.jpg"  alt="food truck6" width="320px" height="240px"/>
            <img src="./img/shelf.jpg" alt="food truck7" width="320px" height="240px"/>
            <img src="./img/whiskey.jpg" alt="food truck8" width="320px" height="240px"/>

            
            </div>
        </section>
         <footer>
            <h4>Questions? Get in Touch!</h4>
         
           <div id= "contact">
             <img src="https://carbonliteracy.com/wp-content/uploads/2018/02/2000px-TK_email_icon.svg.png" width="500px" height="500px" />
           </div>
         <div class="button">
         <button >Email Us</button>
         </div>
        </footer>
        </>
        
    )
}

export default LandingPage
