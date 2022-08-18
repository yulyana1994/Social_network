import s from "./../components/Dialogs/Avatar/Avatar.module.css";
let rerender = () =>{
    console.log("hello")
}

let state = {
    profilePage: {
        posts: [
            {id:1, message: "Это мой первый пост!", likesCount:25},
            {id:2, message: "Меня зовут София", likesCount: 15},
            {id:3, message: "Привет", likesCount: 5},
            {id:4, message: "Я стараюсь выучить React", likesCount: 54},
            {id:5, message: "Я стараюсь выучить JS", likesCount: 4},
            {id:6, message: "Приветик", likesCount: 5}
            ],
        newPostText: "hello"
    },

    messagesPage: {
        messages: [
            {id:1, message: "Привет! Погнали на шаву"},
            {id:2, message: "Купи вкуснях"},
            {id:3, message: "Я тебя люблю"},
            {id:4, message: "Новые фото Арины"},
            {id:5, message: "Пост с инсты"},
            {id:6, message: "С праздником!!"},
            ],
        dialogs: [
            {id:1, name: "Artur", avatar: <img className={s.avatar} src = {require("./../components/assets/artur.jpeg")}  alt="profilephoto" /> },
            {id:2, name: "Sofia", avatar: <img className={s.avatar} src = {require("./../components/assets/sofia.jpeg")} alt="profilephoto" />},
            {id:3, name: "Ilya", avatar: <img className={s.avatar} src = {require("./../components/assets/ilya.jpeg")}  alt="profilephoto"/>},
            {id:4, name: "Yulyana", avatar: <img className={s.avatar} src = {require("./../components/assets/yulyana.jpeg")} alt="profilephoto" />},
            {id:5, name: "Vera", avatar: <img className={s.avatar} src = {require("./../components/assets/vera.jpeg")}  alt="profilephoto"/>},
            {id:6, name: "Ivan", avatar: <img className={s.avatar} src = {require("./../components/assets/ivan.jpeg")} alt="profilephoto" />}
          ]
    },

    sideBar: {
        friends: [
            {id:1, name: "Andrew", avatar: <img className={s.avatar} src = {require("./../components/assets/andrey.jpg")} alt="profilephoto" />},
            {id:2, name: "Sasha", avatar: <img className={s.avatar} src = {require("./../components/assets/sasha.jpg")}  alt="profilephoto"/>},
            {id:3, name: "Stas", avatar: <img className={s.avatar} src = {require("./../components/assets/stas.jpg")} alt="profilephoto" />}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
   state.profilePage.posts.push(newPost); 
   state.profilePage.newPostText = "";
   rerender(state);
};

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText; 
   rerender(state);
}

export const subscribe = (observer) =>{
    rerender = observer;
}

export default state;