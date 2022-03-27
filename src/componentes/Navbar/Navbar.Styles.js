import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    backgroundColor: COLORS.green,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  links: {
    display: "flex"
  },
  link: {
    fontSize: 16,
    padding: 20
  },
  logo: {
    height: 80
  }
};

export default styles;
