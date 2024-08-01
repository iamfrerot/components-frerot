import { MouseEventHandler } from "react";

export type ButtonProps = {
 text: string;
 primary?: boolean;
 secondary?: boolean;
 type: "button" | 'submit' | "reset";
 onClick?: MouseEventHandler;
}