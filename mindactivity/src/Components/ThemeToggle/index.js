import React from "react";

export default function ToggleButton() {
  function setTheme(theme) {
    document.documentElement.className = theme;
    console.log(document.documentElement.className);
  }
  return (
    <div class="toggle-container">
      <button
        class="theme-btn light"
        title="Light mode"
        onClick={setTheme("light")}
      >
        Light theme
      </button>
      <button
        class="theme-btn dark"
        title="Dark mode"
        onClick={setTheme("dark")}
      >
        Dark theme
      </button>
    </div>
  );
}
