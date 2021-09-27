import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isFullscreen = useMediaQuery({ minWidth: 1224 });
  const isMobileScreen = useMediaQuery({ minWidth: 800 });

  if (isFullscreen) {
    return "fullscreen";
  }
  if (isMobileScreen) {
    return "mobile-screen";
  }
};
