import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendsList}>
        {friends.map((el) => {
          return (
            <li key={el.id}>
              <FriendListItem
                name={el.name}
                avatar={el.avatar}
                isOnline={el.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
