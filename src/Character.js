import React from 'react'

export default function Character({ character }) {

  // console.log(character.occupation)
  return (
    <tbody>
      <tr>
        <td>{character.char_id}</td>
        <td>{character.name}</td>
        <td>{character.portrayed}</td>
        <td>{character.status}</td>
        <td>
        {/* Parse through each characters ocupation array to print out their occuplation */}
        {character.occupation.map((occupation) =>{
          return (<li key={occupation}>{occupation}</li>)
        })}
        </td>
        <td><img className="d-none d-md-block" height="100" alt={character.img} src={character.img} /></td>
      </tr>
    </tbody>
    
  )
}
