import Pet from './Pet'

function Client({ item }) {
  return (
    <div>
      <p>{item.name}</p>
      <div>
        {item.pets.map((pet, index) => <Pet key={index} pet={pet} />)}
      </div>
    </div>
  )
}

export default Client
