
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a theme context to manage theme state application-wide
export const ThemeContext = createContext({
  themeName: "default",
  setThemeName: (name: string) => {},
});

// Create the query client
const queryClient = new QueryClient();

const App = () => {
  const [themeName, setThemeName] = useState("default");

  // Apply default theme class on initial render
  useEffect(() => {
    document.documentElement.classList.add(`theme-${themeName}`);
    
    // Clean up function to remove theme class when component unmounts
    return () => {
      document.documentElement.classList.remove(`theme-${themeName}`);
    };
  }, [themeName]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ themeName, setThemeName }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
