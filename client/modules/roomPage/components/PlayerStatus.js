export default function PlayerStatus() {
  const playerStatus = document.getElementById('player-status')

  playerStatus.appendChild(PlayerPoints())
  playerStatus.appendChild(ProfileImage())
}

function PlayerPoints() {
  const playerPoints = document.createElement('div')

  const playerScore = document.createElement('div')
  playerScore.style = `
    font-size: 20px;
    color: white;
    padding: 4px;
  `

  document.addEventListener('player-points', function (event) {
    const { pointsMap } = event.detail
    const setsPoints = pointsMap['0']
    const sequencePoints = pointsMap['1']
    let totalPoints = 0

    for (let key in setsPoints) totalPoints += parseInt(setsPoints[key])
    for (let key in sequencePoints) totalPoints += parseInt(sequencePoints[key])

    playerScore.innerText = 'Score: ' + totalPoints
  })

  const playerWinsLoses = document.createElement('div')
  playerWinsLoses.style = `
    display: flex;
    flex-wrap: wrap;
  `
  playerWinsLoses.appendChild(createWinLoseElement('Wins: 12', '#9d0'))
  playerWinsLoses.appendChild(createWinLoseElement('Loses: 7', '#f27'))
  playerWinsLoses.appendChild(createWinLoseElement('Aborted: 3', 'orange'))

  playerPoints.appendChild(playerWinsLoses)
  playerPoints.appendChild(playerScore)
  return playerPoints
}

function createWinLoseElement(text, color) {
  const newElement = document.createElement('span')
  newElement.innerText = text + ','
  newElement.style.color = color
  newElement.style.fontSize = '14px'
  newElement.style.padding = '2px 4px'
  return newElement
}

function ProfileImage() {
  const profileImage = document.createElement('div')
  profileImage.style = `
    width: 85px;
    height: 85px;
    background-color: #d066;
    border-radius: 50%;
    overflow: hidden;
  `

  const imageElement = document.createElement('img')
  imageElement.src =
    'https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40'
  imageElement.style = `
    width: 100%;
    height: 100%;
  `

  profileImage.appendChild(imageElement)
  return profileImage
}
