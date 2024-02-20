import css from './FriendListItem.module.css'


export default function FriendListItem ({friend:{avatar,name,isOnline}}) {
  return (
<li className={css.itemFriends}>
<div className={css.contFrends}> 
  <img src={avatar} alt="Avatar" width="70" />
  <p>Friend name: {name}</p>
  <>
  {isOnline ? 
  <p className={css.online}>Online</p>
  : 
  <p className={css.offline}>Offline</p>
  }
  </>
</div>
</li>
  )}
