import { useSnackbar as useSnackbarLib } from "react-simple-snackbar";
import { useTheme } from "styled-components";

const useSnackbar = () => {
  const { colors } = useTheme();
  const position = "bottom-center";
  const style = {
    color: "white",
    fontFamily: "Raleway",
  };
  const closeStyle = {
    color: "white",
  };

  const [showError, closeError] = useSnackbarLib({
    position,
    style: {
      ...style,
      backgroundColor: "red",
    },
    closeStyle,
  });
  const [showSuccess, closeSuccess] = useSnackbarLib({
    position,
    style: {
      ...style,
      backgroundColor: colors.primary,
    },
    closeStyle,
  });

  return { showError, showSuccess };
};

export default useSnackbar;
