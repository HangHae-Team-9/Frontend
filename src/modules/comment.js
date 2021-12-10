import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";

// action

const SET_COMMENT = "USER/SET_COMMENT";
const ADD_COMMENT = "USER/ADD_COMMENT";
const EDIT_COMMENT = "USER/EDIT_COMMENT";
const DELETE_COMMENT = "USER/DELETE_COMMENT";

const LOADING = "USER/LOADING";

// action creater

const setComment = createAction(SET_COMMENT, (comment) => ({ comment }));
const addComment = createAction(ADD_COMMENT, (id, commentcontent) => ({
  id,
  commentcontent,
}));
// const editComment = createAction(EDIT_COMMENT, (id, commentcontent) => ({
//   id,
//   commentcontent,
// }));
const deleteComment = createAction(DELETE_COMMENT, (id) => ({
  id,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//initialState
const initialState = {
  list: {},
  is_loading: false,
};

//thunk
export const addCommentDB = (id, username, commentcontent) => {
  return async (dispatch, getState, { history }) => {
    await apis.addComment(id, username, commentcontent);
    // window.location.reload();
    window.alert("작성 성공");
  };
};

export const delCommentDB = (id) => {
  return (dispatch, getState, { history }) => {
    apis.delComment(id);
  };
};

// const getCommentDB = (post_id, username, commentcontent) => {
//   return function (dispatch, getState, { history }) {
//     if (!post_id) {
//       return;
//     }

//     apis.addComment(username, commentcontent);
//     // apis.editComment(username, commentcontent)
//   };
// };

//reducer

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => {
      return {
        ...state,
        list: action.payload.list,
      };
    },

    // [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),
    // [DELET_COMMENT] : (state, action) => produce(state,(draft)=> { }),
    // [LOADING]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.is_loading = action.payload.is_loading;
    //   }),
  },
  initialState
);

// export const actionCreators = {
//   getCommentDB,
//   // edoitComment,
//   addComment,
// };
