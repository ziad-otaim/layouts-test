import { useNavigate } from "react-router-dom";

export const useNavigationMiddleware = () => {
  const navigate = useNavigate();

  const navigateWithMiddleware = (to, options = {}, middleware = []) => {
    console.log('hello');
    
    // Execute all middleware functions sequentially
    for (const fn of middleware) {
      const shouldContinue = fn(to, options);
      if (shouldContinue === false) {
        // Stop navigation if any middleware returns `false`
        return;
      }
    }

    // Proceed to navigate
    navigate(to, options);
  };

  return navigateWithMiddleware;
};
