import React, { useRef, useState, createRef } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function useMergedRefs(...refs) {
  return (element) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    });
  };
}

const Text = () => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("Double click to edit.");

  const nodeRef = useRef(null);
  const memeRef = useRef(); 

  const mergedRef = useMergedRefs(nodeRef, memeRef);

  return (
    <div className="flex flex-col items-center">
      <Draggable nodeRef={nodeRef}>
        <div ref={mergedRef} className="meme absolute">
          {edit ? (
            <input
              className="bg-transparent cursor-move"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onDoubleClick={() => setEdit(false)}
            />
          ) : (
            <h2 className="cursor-move" onDoubleClick={() => setEdit(true)}>
              {val}
            </h2>
          )}
        </div>
      </Draggable>

      
    </div>
  );
};

export default Text;
