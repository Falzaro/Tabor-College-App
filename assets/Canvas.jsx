import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Canvas = (props) => (
    <Svg
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{ marginBottom: 7 }}
    >
        <Path
            d="M6.333 1v32M27.666 1v32M1 6.333h32M1 27.667h32"
            stroke="#000"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Canvas;
