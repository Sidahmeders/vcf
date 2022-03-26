export default function createPlayerStatus() {
  return function PlayerStatus(score_points) {
    const playerStatus = document.getElementById('player-status')
    playerStatus.innerHTML = ''

    playerStatus.appendChild(PlayerPoints(score_points))
    playerStatus.appendChild(ProfileImage())
  }
}

function PlayerPoints(score_points = 0) {
  const playerPoints = document.createElement('div')

  const playerScore = document.createElement('div')
  playerScore.id = 'player-score'
  playerScore.innerText = 'Score: ' + score_points
  playerScore.style = `
    font-size: 20px;
    color: white;
    padding: 4px;
  `

  const playerWinsLoses = document.createElement('div')
  playerWinsLoses.style = `
    display: flex;
    flex-wrap: wrap;
  `
  playerWinsLoses.appendChild(makeRecordsElement('Wins: 12', '#9d0'))
  playerWinsLoses.appendChild(makeRecordsElement('Loses: 7', '#f27'))
  playerWinsLoses.appendChild(makeRecordsElement('Aborted: 3', 'orange'))

  playerPoints.appendChild(playerWinsLoses)
  playerPoints.appendChild(playerScore)
  return playerPoints
}

function makeRecordsElement(text, color) {
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
