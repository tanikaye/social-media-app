import React from 'react'

function FriendsList() {


useEffect(() => {
fetch("http://localhost:3000/people")
.then(r => r.json())
.then(data => setarrayOfFriends(data))
}, [])

  return (
    <ul className="cards">{arrayOfFriends.map((friendObj, ix) => {
      return <FriendCard key={ix} friendObj={friendObj}/>
    })}</ul>
  );

}

export default FriendsList
