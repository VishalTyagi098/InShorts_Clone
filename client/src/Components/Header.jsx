import * as React from 'react';



export default function Header() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <div position="static">
        <div>
        <h1 className="text-5xl font-bold underline">
          Hello world!
        </h1>
          
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
        </div>
      </div>
    </div>
  );
}
