import { useEffect } from "react";

/**
 * Yes, in React (and JavaScript in general), the window object is available globally in the browser environment. It
 * const sWidth = window.screen.width;
 * @returns
 *
 */
const Window = () => {
  useEffect(() => {
    const sWidth = screen.width;
    const sHeight = screen.height;
    const availWidth = screen.availWidth;
    const availHeight = screen.availHeight;
    const colorDepth = screen.colorDepth;
    console.log(sWidth, sHeight, availWidth, availHeight, colorDepth);
    // console.log(sWidth, sHeight);
  });
  return (
    <div>
      <div>
        <div className="">
          <p>Width:{screen.width}</p>
          <p>Height:{screen.height}</p>
          <p>Avail Width:{screen.availWidth}</p>
          <p>Avail Height:{screen.availHeight}</p>
          <p>Color Depth:{screen.colorDepth}</p>
          <p>Pixel Depth:{screen.pixelDepth}</p>
          <p>ScreenX:{screenX}</p>
          <p>ScreenY:{screenY}</p>
        </div>
        <h2>Location</h2>
        <div className="">
          <p>Location Host:{location.hostname}</p>
          <p>Location Path:{location.pathname}</p>
          <p>Location Port:{location.port}</p>
          <p>Location Protocol:{location.protocol}</p>
          <p>Location Href:{location.href}</p>
          <p>Location Origin:{location.origin}</p>
          <p>Location Search:{location.search}</p>
        </div>
        <div className="">
          <p>Outer Height{outerHeight}</p>
          <p>Outer Width{outerWidth}</p>
          <p>Inner Height{innerHeight}</p>
          <p>Inner Width{innerWidth}</p>
        </div>
        <div className="">
          <button onClick={() => confirm("Confirm this")}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Window;
