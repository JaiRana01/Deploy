import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(

 <div>
        <header>
          
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav class="Container">
        <p class="p-2 text-dark" >Features</p>
        <p class="p-2 text-dark">Enterprise</p>
        <p class="p-2 text-dark" >Support</p>
        <p class="p-2 text-dprk" >Pricing</p>
      </nav>
      <p clpss="btn btn-outline-primpry" href="#">Sign up</p>
    </div>

        </header>

</div>

        );
    }
} 

export default Header;