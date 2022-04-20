import React from "react";
import Buttons from "./Buttons";

function Form() {
    return (

        <div className="mt-20 text-lg">
            <div className="grid grid-cols-2 w-full">
                <div className="flex justify-center">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Name:
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Aadress:
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Phone:
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Role:
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name" type="text"/>
                    </div>
                </div>
            <Buttons/>
            </form>
                </div>
                <div className="w-6/12">
                    <h1 className="font-bold"> How we handle your Data </h1>
                    <div className="text-sm mt-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam ex, elementum quis tellus quis, molestie ultrices ipsum. Proin vel pharetra felis.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nam interdum vulputate dolor quis mollis.
                    </p>
                    </div>
                    <herosvg/>
                </div>
          </div>
        </div>

    );
}

export default Form;