import React from 'react';

export default function Footer() {
  return (
    <div className='p-8 grid grid-cols-4 justify-between bg-gray-900 h-50'>
      <div className='ml-8'>
        <h3 className='text-gray-300 text-lg'>About</h3>
        <ul className='list-none p-0'>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Terms
            </a>
          </li>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Legal
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-gray-300 text-lg'>Contact</h3>
        <ul className='list-none p-0'>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Press
            </a>
          </li>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Support
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-gray-300 text-lg'>Social</h3>
        <ul className='list-none p-0'>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Twitter
            </a>
          </li>
          <li>
            <a className='text-gray-300 hover:text-sky-400 text-sm' href='#'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className='flex '>
        <span>&copy; Copyright 2023 LOGO</span>
      </div>
    </div>
  );
}
