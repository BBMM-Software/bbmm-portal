export default class Utilities {

    static isMobileAgent() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  
    static isMobileWidth() {
      return window.innerWidth < 640;
    }

  }