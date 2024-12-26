import { useState } from "react";
import "./styles.css";
import Badge from "../_common/badge";

export default function Example() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="relative h-[200px] w-[700px] my-10">
      <section
        className={`p-6 rounded-lg border space-y-2.5 bg-white w-[700px] absolute top-0 
            ${isLight && "reveal z-10"}
          `}
      >
        <h2>Experience the theme switch animation yourself.</h2>
        <div className="flex flex-col">
          <p>
            This technique is using{" "}
            <Badge asChild className="text-white bg-black">
              <span>clip-path</span>
            </Badge>
            , this element is duplicated and overlayed on top of the
          </p>
          <p>
            original one. The duplicated elements have different themes and we just reveal the one
          </p>
          <p>
            underneath by animating the{" "}
            <Badge asChild className="text-white bg-black">
              <span>clip-path</span>
            </Badge>{" "}
            property.
          </p>
        </div>
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
        <div className="flex flex-col">
          <p>
            This technique is using{" "}
            <Badge asChild className="bg-neutral-800 text-white border-none">
              <span>clip-path</span>
            </Badge>
            , this element is duplicated and overlayed on top of the
          </p>
          <p>
            original one. The duplicated elements have different themes and we just reveal the one
          </p>
          <p>
            underneath by animating the{" "}
            <Badge asChild className="bg-neutral-800 text-white border-none">
              <span>clip-path</span>
            </Badge>{" "}
            property.
          </p>
        </div>
        <button
          type="button"
          className="bg-white text-black py-1 px-2.5 rounded-md"
          onClick={() => setIsLight(true)}
        >
          Switch theme
        </button>
      </section>
    </div>
  );
}
