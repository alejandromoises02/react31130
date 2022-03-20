const styles = {
  container: {
    backgroundColor: "gray",
    marginLeft: 20,
    marginRigth: 20,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  links: {
    display: "flex",
    textDecoration: "none",
    "& :link": {
      textDecoration: "none"
    },
    "& :a:visited": {
      textDecoration: "none"
    },
    "& :active": {
      textDecoration: "none"
    }
  },
  link: {
    margin: 10,
    fontSize: 16
  },
  logo: {
    height: 80
  }
};

export default styles;
