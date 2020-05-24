import React, { useState, useRef, HTMLAttributes, ReactNode, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Popover.scss";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  element: ReactNode;
}

interface PositionCss {
  top?: number;
  left?: number;
  right?: number;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, element, className = "", ...rest } = props;

  const [containerPosition, setContainerPosition] = useState<PositionCss>({ top: -10000 });
  const [show, setShow] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (wrapper.current && !wrapper.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (!wrapper.current) return;
    const rect = wrapper.current.getBoundingClientRect();
    setContainerPosition({
      top: rect.height + 3,
      ["right"]: 0,
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div {...rest} className={["popover-container", className].join(" ")}>
      <div ref={wrapper} onClick={() => setShow(!show)} className={"popover"}>
        {element}
      </div>

      <CSSTransition
        style={containerPosition}
        in={show}
        timeout={300}
        unmountOnExit
        classNames={"popover-transition-container"}
      >
        <div className={"popover-content-container"}>{children}</div>
      </CSSTransition>
    </div>
  );
};
