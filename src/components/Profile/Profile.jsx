import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} width={200} height={200} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
