import { Update } from "@material-ui/icons";
import s from "./../components/Dialogs/Avatar/Avatar.module.css";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Это мой первый пост!", likesCount: 25 },
        { id: 2, message: "Меня зовут София", likesCount: 15 },
        { id: 3, message: "Привет", likesCount: 5 },
        { id: 4, message: "Я стараюсь выучить React", likesCount: 54 },
        { id: 5, message: "Я стараюсь выучить JS", likesCount: 4 },
        { id: 6, message: "Приветик", likesCount: 5 },
      ],
      newPostText: "hello",
    },

    messagesPage: {
      messages: [
        { id: 1, message: "Привет! Погнали на шаву" },
        { id: 2, message: "Купи вкуснях" },
        { id: 3, message: "Я тебя люблю" },
        { id: 4, message: "Новые фото Арины" },
        { id: 5, message: "Пост с инсты" },
        { id: 6, message: "С праздником!!" },
      ],
      dialogs: [
        {
          id: 1,
          name: "Artur",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/artur.jpeg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 2,
          name: "Sofia",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/sofia.jpeg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 3,
          name: "Ilya",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/ilya.jpeg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 4,
          name: "Yulyana",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/yulyana.jpeg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 5,
          name: "Vera",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/vera.jpeg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 6,
          name: "Ivan",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/ivan.jpeg")}
              alt="profilephoto"
            />
          ),
        },
      ],
      newMessageBody: "",
    },

    sideBar: {
      friends: [
        {
          id: 1,
          name: "Andrew",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/andrey.jpg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 2,
          name: "Sasha",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/sasha.jpg")}
              alt="profilephoto"
            />
          ),
        },
        {
          id: 3,
          name: "Stas",
          avatar: (
            <img
              className={s.avatar}
              src={require("./../components/assets/stas.jpg")}
              alt="profilephoto"
            />
          ),
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State Change");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: "ADD-POST"}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      debugger;
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "";
      this._state.messagesPage.messages.push({
        id: 7,
        message: body,
      });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export const sendMessageCreator = (body) => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;
window.store = store;
