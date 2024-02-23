import PropTypes from "prop-types";

import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userContainer}>
      <div className={css.contProfile}>
        <img width={250} src={image} alt={name} />
        <p className={css.userText}>{name}</p>
        <p className={css.userText}>{tag}</p>
        <p className={css.userText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers: </span>
          <br />
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views: </span>
          <br />
          <span>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes: </span>
          <br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
