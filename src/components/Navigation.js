import React from "react";

function Navigation() {
    return (

        <div className="w-2/6 ml-10 mt-10">
            <div className="text-white">
             <nav>
                <ul className="flex justify-between inline-block text-sm">
                    <a href=""><li className="bg-black p-1 px-3 rounded-full"> About Us </li></a>
                    <a href=""><li className="bg-black p-1 px-3 rounded-full"> Funding </li></a>
                    <a href=""><li className="bg-black p-1 px-3 rounded-full"> Team</li> </a>
                    <a href=""><li className="bg-black p-1 px-3 rounded-full"> Survey </li> </a>
                </ul>
             </nav>
           </div>
        </div>

    );
}

export default Navigation;