import s from "./../components/Dialogs/Avatar/Avatar.module.css";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
