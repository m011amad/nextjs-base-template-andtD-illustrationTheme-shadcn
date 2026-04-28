"use client";

import { ConfigProvider } from "antd";
import useCartoonTheme from "../hooks/illustrationTheme.js";

export default function Providers({ children }) {
  const configProps = useCartoonTheme();

  return <ConfigProvider {...configProps}>{children}</ConfigProvider>;
}
