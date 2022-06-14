import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  background-color: #223a5f;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  height: 90vh;
  width: 60%;
  padding-top: 25px;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 8px;
  padding-left: 45px;
  padding-right: 45px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 0px;
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #223a5f;
  width: 120px;
  height: 80px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ScoreTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  margin-top: 3px;
`

export const GameContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding-left: 0px;
`

export const RulesButton = styled.button`
  color: #000;
  border-width: 0px;
  border-radius: 8px;
  height: 28px;
  width: 60px;
  cursor: pointer;
  background-color: #fff;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`
export const Image = styled.img`
  width: 100%;
`
