import React from 'react'

interface Player {
    id: number;
    name: string;
    email: string;
}

const minecraftAvatar = async () => {

   const res = await fetch('https://mc-heads.net/avatar/asylx',
   {cache: 'no-store'});
   const player: Player[] = await res.json()  

  return (
    <div>
      
    </div>
  )
}

export default minecraftAvatar
