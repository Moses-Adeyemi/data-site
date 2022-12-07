import React from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    
      <div className="max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DELIGHT-DATA.</h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem harum
          aliquam pariatur totam, consequatur dolor maiores non incidunt quas
          maxime ullam? Quos odit nihil eveniet, sapiente architecto ex quis
          dolorem!
        </p>
        <div className="flex md:w-[75%] my-6 justify-between cursor-pointer">
          <FaFacebookF size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
        <div >
          <ul>
            <h6 className="font-medium text-gray-400">SOLUTIONS</h6>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Merketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
          
        </div>
        <div>
          <ul>
            <h6 className="font-medium text-gray-400">SUPPORT</h6>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
          </div>
     
      
        <div >
          <ul>
            <h6 className="font-medium text-gray-400">COMPANIES</h6>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
          
        </div>
        <div>
          <ul>
            <h6 className="font-medium text-gray-400">LEGASL</h6>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
          
        </div>
       
     
      </div>
    </div>
  );
};

export default Footer;
