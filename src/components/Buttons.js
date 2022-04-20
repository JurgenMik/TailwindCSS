import React from "react";

function Buttons() {
    return (

        <div className="mt-16">
            <div className="flex justify-center">
              <button type="submit" className="bg-primary rounded p-1 mx-2 text-white px-4">
                Submit
              </button>
              <button type="submit" className="bg-light rounded p-1 mx-2 px-4">
                Delete
              </button>
          </div>
        </div>

    );
}

export default Buttons;