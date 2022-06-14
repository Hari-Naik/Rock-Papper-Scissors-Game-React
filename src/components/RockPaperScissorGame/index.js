import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import GameItem from '../GameItem'
import GameResult from '../GameResult'

import {
  AppContainer,
  ResponsiveContainer,
  ScoreCardContainer,
  ScoreCard,
  ContentContainer,
  Heading,
  ScoreTitle,
  Score,
  GameContainer,
  RulesButton,
  PopupContainer,
  ModalContainer,
  Image,
} from './styledComponents'
import {Button} from '../GameItem/styledComponents'

class RockPaperScissorGame extends Component {
  state = {score: 0, userChoice: {}, showGameResult: false, showPopUp: false}

  onClickshowPopUp = () => {
    this.setState(prevState => ({showPopUp: !prevState.showPopUp}))
  }

  onClickResetGame = () => {
    this.setState(prevState => ({
      showGameResult: !prevState.showGameResult,
    }))
  }

  onClickGameButton = eachItem => {
    this.setState(prevState => ({
      showGameResult: !prevState.showGameResult,
      userChoice: eachItem,
    }))
  }

  onChangeScore = gameResult => {
    console.log(gameResult)
    if (gameResult === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (gameResult === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  renderGameResultsView = () => {
    const {choicesList} = this.props
    const {userChoice} = this.state
    return (
      <GameResult
        userChoice={userChoice}
        oppChoice={choicesList[Math.floor(Math.random() * 3)]}
        onClickResetGame={this.onClickResetGame}
        onChangeScore={this.onChangeScore}
      />
    )
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        {choicesList.map(eachItem => (
          <GameItem
            eachItem={eachItem}
            key={eachItem.id}
            onClickGameButton={this.onClickGameButton}
          />
        ))}
      </GameContainer>
    )
  }

  render() {
    const {showGameResult, score} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreCardContainer>
            <ContentContainer>
              <Heading>
                ROCK <br /> PAPER <br /> SCISSORS
              </Heading>
            </ContentContainer>
            <ScoreCard>
              <ScoreTitle>Score</ScoreTitle>
              <Score>{score}</Score>
            </ScoreCard>
          </ScoreCardContainer>
          {showGameResult ? this.renderGameResultsView() : this.renderGame()}
          <PopupContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
            >
              {close => (
                <ModalContainer>
                  <Button type="button" onClick={() => close()}>
                    <RiCloseLine size={20} color="#000000" />
                  </Button>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissorGame
