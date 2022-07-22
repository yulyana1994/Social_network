import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return(
        <div className={s.content}>
            <div> 
                <img className={s.sea} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div className={s.item}>
                            post 1
                        </div>
                        <div className={s.item}>
                            post 2
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile;