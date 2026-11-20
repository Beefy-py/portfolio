import { useCallback, useEffect, useState } from "react";

// Dark is the default; a saved "light" preference is applied pre-paint by the
// inline script in _document.tsx, so this hook only needs to read and toggle.
function useDarkmode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.theme = next ? "dark" : "light";
    } catch {}
    setIsDark(next);
  }, []);

  return { isDark, toggle };
}

export default useDarkmode;
