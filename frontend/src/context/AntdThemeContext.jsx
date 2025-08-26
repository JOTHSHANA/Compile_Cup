import React, { useContext } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeContext } from "../context/ThemeContext";

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
      <div data-theme={theme}>{children}</div>
    </ConfigProvider>
  );
};

export default AntdThemeContext;
