import css from './FriendListItem.module.css'

import clsx from 'clsx'

export default function FriendListItem ({friend:{avatar,name,isOnline}}) {
  return (
<li className={css.itemFriends}>
<div className={clsx(css.contFrends,{
  [css.borderOnline]: isOnline === true,
  [css.borderOffline]: isOnline === false,
})
  

}> 
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
