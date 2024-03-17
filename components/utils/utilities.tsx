export default class Utilities {

    static TAILWIND_XS = 300;
    static TAILWIND_SM = 640;
    static TAILWIND_MD = 768;
    static TAILWIND_LG = 1024;
    static TAILWIND_XL = 1280;
    static isMobileAgent() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  
    static isMobileWidth() {
      return window.innerWidth < 640;
    }

    static getWindowWidth() {
        return window.innerWidth;
    }

  }