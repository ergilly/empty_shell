import { connect } from "react-redux";
import Inventory from "../components/Inventory";

const mapStateToProps = state => {
  return {
    statename: state
  };
};

export default connect(mapStateToProps)(Inventory);
