import React from "react";
import "../../assets/css/footer.css";

function FooterComponent() {
  return (
    <>
      <footer className="relative footer bg-gray-100 ">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-1 text-gray-700 font-medium py-3">
              © 2020 Insala. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
