import {
  isIOS,
  isMacOs,
  isIPhone13,
  isWinPhone,
  isIPad13,
  isWindows,
} from "react-device-detect";

const useDeviceType = () => {
  if (isIOS || isIPhone13) {
    return "iOS";
  } else if (isMacOs) {
    return "Mac";
  } else if (isWindows) {
    return "Windows";
  } else if (isWinPhone) {
    return "WinPhone";
  } else if (isIPad13) {
    return "iPad";
  } else {
    return "Extra"; // Black Berry, iPod
  }
};

export default useDeviceType;
