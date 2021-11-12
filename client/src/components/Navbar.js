import React from "react";

export const Navbar = () => {
    return (
        //         <div>
        //             <nav class="navbar navbar-dark bg-dark bg-primary"></nav>
        //             <div class="container-fluid"></div>
        //             <li class="nav-item">
        //             <a class="nav-link" href="/"> Home </a>
        //             </li>
        //             <a href="/members">Members </a>
        //             <a href="/members/new">New Members</a>
        //             <nav class="navbar navbar-dark bg-dark bg-primary"></nav>
        //         </div>
        //     )
        // }

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/members">MEMBERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/members/new">NEW MEMBERS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
        
}

export default Navbar


{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a> */}