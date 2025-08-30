import React, { useContext } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeContext } from "./ThemeContext";

const AntdThemeContext = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeContext;
