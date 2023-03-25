export const matchColor = ({ heading }) => {
  switch (heading) {
    case "Todo":
      return "#5BC0F8";
    case "Progress":
      return "#FFC93C";
    case "Done":
      return "#03C988";
    default:
      return "#5BC0F8";
  }
};
