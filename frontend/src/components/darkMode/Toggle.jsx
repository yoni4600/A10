import React from 'react';

const DarkModeToggle = () => {
    const toggle = () => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
    };

    // view
    const setView = (v) => {
        document.querySelector('h1').innerText = v;
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.querySelector('h1').style.borderBottom = `10px solid #${randomColor}`;
        toggleMenu(true);
    };

    // menu
    const toggleMenu = (hide) => {
        if (!hide) {
            document.querySelector('#ddMenu').classList.toggle('hidden');
            document.querySelectorAll('svg').forEach((el) => {
                el.classList.toggle('hidden');
            });
        }
        else {
            document.querySelector('#ddMenu').classList.add('hidden');
            document.querySelectorAll('svg')[0].classList.remove('hidden');
            document.querySelectorAll('svg')[1].classList.add('hidden');
        }
    };

    return (
        <div className="bg-customBackground ">
            <button className="block sm:hidden font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={toggleMenu}></button>
            <button className="text-white bg-cutsomGray hover:bg-gray-300 dark:hidden block font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={toggle}>Dark</button>
            <button className="hidden dark:block font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={toggle}>Light</button>
        </div>
    );
};

export default DarkModeToggle;