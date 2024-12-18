import { useState } from "react";
import "./styles.css";

export default function ClipPath() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="relative">
      <section
        className={`p-4 rounded-lg border space-y-2.5 bg-white w-fit absolute top-0 
            ${isLight && "reveal z-10"}
          `}
      >
        <h2>Experience the theme switch animation yourself.</h2>
        <p className="flex flex-col">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, asperiores?</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
          <span>Lorem, ipsum dolor.</span>
        </p>
        <button
          type="button"
          className="bg-black text-white py-1 px-2.5 rounded"
          onClick={() => setIsLight(false)}
        >
          Switch theme
        </button>
      </section>
      <section
        className={`p-4 rounded-lg border space-y-2.5 w-fit absolute top-0 bg-black text-white
          ${!isLight && "reveal z-10"}
          `}
      >
        <h2>Experience the theme switch animation yourself.</h2>
        <p className="flex flex-col">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, asperiores?</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
          <span>Lorem, ipsum dolor.</span>
        </p>
        <button
          type="button"
          className="bg-white text-black py-1 px-2.5 rounded"
          onClick={() => setIsLight(true)}
        >
          Switch theme
        </button>
      </section>
    </div>
  );
}
