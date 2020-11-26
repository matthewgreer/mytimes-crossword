import { connect } from "react-redux";
import { fetchUserMicro, updateUserMicro } from '../../actions/user_micro_actions';
// import { updateUserMicro } from "../../util/user_micro_api_util";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  userId: state.session.id,
  wordcrossDate: ownProps.match.params.wordcross_date,
  wordcrossType: 'Micro',
  wordcrossDataSet: state.entities.userMicros.user_micro,
});

const mdp = (dispatch) => ({
  fetchWordcross: (user_id, wordcross_date) => { 
    dispatch(fetchUserMicro(user_id, wordcross_date));
  },
  updateWordcross: (user_micro) => { 
    dispatch(updateUserMicro(user_micro)); 
  }
});

const UserMicroContainer = connect(msp, mdp)(Wordcross);

export default UserMicroContainer;