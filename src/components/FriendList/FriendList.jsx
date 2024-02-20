import FriendListItem from "./FriendListItem/FriendListItem"
import css from './FriendList.module.css'


export default function FriendList ({friends}) {
  return  (
    <ul className={css.friendsList}>
	{friends.map(friend => (
          <FriendListItem friend={friend} key={friend.id}/>
    ))}
</ul>
  )
}


 