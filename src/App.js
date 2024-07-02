import Users from "./components/Users";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

let listOfUser = [
  {
    name: 'Chan',
    message: 'How are you ..',
    time: '7.15',
    rete: '⭐',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
  {
    name: 'Jessica Koel',
    message: 'Hey Aswin, I here to help you out please ..',
    time: '11.26',
    rete: '⭐',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU'
  },
  {
    name: 'Komeial Bolger',
    message: 'I will send you all documents as soo as ..',
    time: '12.26',
    rete: '⭐',
    img_url: 'https://cdn.prod.website-files.com/62bb1002c791742c87073bc9/663201be286f923ff97ce598_633acad620b9cf8684d26688_male.png'
  },
  {
    name: 'Tamaara Suiale',
    message: 'Are you going to business trip next week ..',
    time: '8.26',
    rete: '⭐',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
  {
    name: 'Sam Nielson',
    message: 'I suggest to start new business soon  ..',
    time: '7.16',
    rete: '⭐',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU'
  },
  {
    name: 'Caroline Nexon',
    message: 'Hey Aswin, I here to help you out please ..',
    time: '9.15',
    rete: '⭐',
    img_url: 'https://cdn.prod.website-files.com/62bb1002c791742c87073bc9/663201be286f923ff97ce598_633acad620b9cf8684d26688_male.png'
  },
  {
    name: 'Patrick koeler',
    message: 'Hey Aswin, I here to help you out please ..',
    time: '4.10',
    rete: '⭐',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
]

let App = () => {
  return (
    <div className="user_container">
      <div className="search">
          <input type="text" placeholder="Search ..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      {
        listOfUser.map((item) => {
          return (
            <Users Uname={item.name} Umessage={item.message} Utime={item.time} Urating={item.rete} Uimg={item.img_url}></Users>
          )
        })
      }
    </div>

  )


}
export default App;