import {Component} from 'react'

import {
  GameResultsContainer,
  UserChoiceContainer,
  Heading,
  Image,
  ResultsContainer,
  ResultsText,
  PlayAgainButton,
} from './styledComponents'

class GameResult extends Component {
  state = {gameResult: ''}

  componentDidMount() {
    this.getResult()
  }

  getResult = () => {
    const {userChoice, oppChoice} = this.props

    if (userChoice.id === 'ROCK' && oppChoice.id === 'SCISSORS') {
      this.setState({gameResult: 'YOU WON'}, this.onUpdateScore)
      //   result = 'YOU WON'
    } else if (userChoice.id === 'SCISSORS' && oppChoice.id === 'PAPER') {
      /* return 'YOU WON' */
      this.setState({gameResult: 'YOU WON'}, this.onUpdateScore)
    } else if (userChoice.id === 'PAPER' && oppChoice.id === 'ROCK') {
      this.setState({gameResult: 'YOU WON'}, this.onUpdateScore)
    } else if (oppChoice.id === 'ROCK' && userChoice.id === 'SCISSORS') {
      /* return 'YOU LOSE' */
      this.setState({gameResult: 'YOU LOSE'}, this.onUpdateScore)
    } else if (oppChoice.id === 'SCISSORS' && userChoice.id === 'PAPER') {
      // return 'YOU LOSE'
      this.setState({gameResult: 'YOU LOSE'}, this.onUpdateScore)
    } else if (oppChoice.id === 'PAPER' && userChoice.id === 'ROCK') {
      /* return 'YOU LOSE' */
      this.setState({gameResult: 'YOU LOSE'}, this.onUpdateScore)
    } else if (oppChoice.id === userChoice.id) {
      //   result = 'IT IS DRAW'
      this.setState({gameResult: 'IT IS DRAW'})
    }
  }

  onUpdateScore = () => {
    const {gameResult} = this.state
    const {onChangeScore} = this.props
    onChangeScore(gameResult)
  }

  render() {
    const {gameResult} = this.state
    const {userChoice, oppChoice, onClickResetGame} = this.props

    return (
      <GameResultsContainer>
        <UserChoiceContainer>
          <Heading>YOU</Heading>
          <Image src={userChoice.imageUrl} alt="your choice" />
        </UserChoiceContainer>
        <ResultsContainer>
          <ResultsText>{gameResult}</ResultsText>
          <PlayAgainButton type="button" onClick={onClickResetGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultsContainer>
        <UserChoiceContainer>
          <Heading>OPPONENT</Heading>
          <Image src={oppChoice.imageUrl} alt="opponent choice" />
        </UserChoiceContainer>
      </GameResultsContainer>
    )
  }
}

export default GameResult
