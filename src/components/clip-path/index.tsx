import { useState } from "react";
import "./styles.css";

export default function ClipPath() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="relative">
      <section
        className={`p-6 rounded-lg border space-y-2.5 bg-white w-[700px] absolute top-0 
            ${isLight && "reveal z-10"}
          `}
      >
        <h2>Experience the theme switch animation yourself.</h2>
        <p className="flex flex-col">
          <span>
            This technique is using clip-path, this element is duplicated and overlayed on top of
            the
          </span>
          <span>
            original one. The duplicated elements have different themes and we just reveal the one
          </span>
          <span>underneath by animating the clip-path property.</span>
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
        className={`p-6 rounded-lg border space-y-2.5 w-[700px] absolute top-0 bg-black text-white
          ${!isLight && "reveal z-10"}
          `}
      >
        <h2>Experience the theme switch animation yourself.</h2>
        <p className="flex flex-col">
          <span>
            This technique is using clip-path, this element is duplicated and overlayed on top of
            the
          </span>
          <span>
            original one. The duplicated elements have different themes and we just reveal the one
          </span>
          <span>underneath by animating the clip-path property.</span>
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
