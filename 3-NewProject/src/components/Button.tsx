import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	el: "button";
}

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
	el: "anchor";
}

export default function Button(props: ButtonProps | AnchorProps) {
	if (props.el === "anchor") {
		return <a className="button" {...props} />;
	}

	return <button className="button" {...props} />;
}

//  ---------------------
// | DYNAMIC ATTRIBUTION |
//  ---------------------

// import { type ComponentPropsWithoutRef } from "react"

// type ButtonProps = ComponentPropsWithoutRef<"a"> | ComponentPropsWithoutRef<"button">

// function isAnchorProps(props: ButtonProps): props is ComponentPropsWithoutRef<"a"> {
//   return "href" in props
// }

// export default function Button(props: ButtonProps) {
//   if(isAnchorProps(props)) {
//     return <a className="button" {...props}></a>
//   }

//   return (
//     <button className="button" {...props} ></button>
//   )
// }
