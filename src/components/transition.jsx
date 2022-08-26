import { Slide } from "@mui/material";
import { forwardRef } from "react";

const SlideUp = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export { SlideUp };
