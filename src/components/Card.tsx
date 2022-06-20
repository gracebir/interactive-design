import styled from 'styled-components'

type CardProp = {
    image: string;
    content: string;
    createAt: string;
    score: number;
    username: string;
}

const CardWrapper = styled.div`
   background-color: var(--white);
   border-radius : 5px;
   min-height: 5rem ;
   padding: 1.5em;
  margin: 1.5em 0;
`

export const Avatar = styled.img`
    height: 2.7em;
`

const CardHeader = styled.div`
    display:flex ;
    gap: 1em;
    align-items: center;
`

const ReplyImg = styled.img`
    height: 23px;
`

const H4 = styled.span`
    font-weight:600;
    font-size: 20px;
`

const Content = styled.p`
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    color: var(--grayish-blue);
    line-height: 1.4;
    padding: 1em 0 ;
`;

const Span = styled.span`
    color: var(--grayish-blue);
    font-size: 20px;
`

const CardBody = styled.div``;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SigneNumber = styled.span`
    color: var(--moderate-blue);
    font-size:20px ;
    font-weight: 500;
`

const Signe = styled.span`
    color: var(--light-grayish-blue);
    font-size: 25px;
    font-weight: 600;
`

const Reply = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`

const ReplyText = styled.span`
    color: var(--moderate-blue);
    font-size:23px ;
    font-weight: 500;
`

const Score = styled.div`
    background-color: var(--light-gray);
    padding:.7em 2em;
    border-radius:10px;
    display: flex ;
    align-items: center;
    gap: 1em;
`

function Card({
    image,
    content,
    username,
    createAt,
    score
}:CardProp) {
  return (
    <CardWrapper>
            <CardHeader>
                <Avatar src={image} alt=''/>
                <H4>{username}</H4>
                <Span>{createAt}</Span>
            </CardHeader>
            <CardBody>
                <Content>
                    {content}
                </Content>
            </CardBody>
            <CardFooter>
                <Score>
                    <Signe>+</Signe>
                    <SigneNumber>{score}</SigneNumber>
                    <Signe>-</Signe>
                </Score>
                <Reply>
                    <ReplyImg src='./images/icon-reply.svg' alt=''/>
                    <ReplyText>Reply</ReplyText>
                </Reply>
            </CardFooter>
    </CardWrapper>
  )
}

export default Card