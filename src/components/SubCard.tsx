import React from 'react'
import styled from 'styled-components';
import DeleteModal from './DeleteModal';


type SubCardProp = {
    image: string;
    content: string;
    isCurrentUser?: boolean;
    replyingTo?: string;
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
  margin-left: 1em;
`

const Avatar = styled.img`
    height: 2.7em;
`

const CardHeader = styled.div`
    display:flex ;
    gap: .6em;
    align-items: center;
`

const ReplyImg = styled.img`
    height: 19px;
`
const H4 = styled.span`
    font-weight:600;
    font-size: 19px;
`

const Content = styled.p`
    font-size: 17px;
    font-family: 'Rubik', sans-serif;
    color: var(--grayish-blue);
    line-height: 1.4;
    padding: 1em 0 ;
`;

const Span = styled.span`
    color: var(--grayish-blue);
    font-size: 19px;
    
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
    padding:.7em 1.5em;
    border-radius:10px;
    display: flex ;
    align-items: center;
    gap: 1em;
`

const UpdateButton = styled.div`
    display: flex;
    gap: 1em;
`

const ReplyImgUp = styled.img`
    height: 18px;
`

const ReplyTextUpda = styled.span`
    color: var(--moderate-blue);
    font-size: 16px;
    font-weight: 500;
`

const ReplyUp = styled.div`
    display: flex;
    gap: .3em;
    align-items: center;
`

// styled modal



function SubCard( {image,
    content,
    username,
    replyingTo,
    createAt,
    score,
    isCurrentUser
    }:SubCardProp) {
        const [isOpen, setIsOpen] = React.useState(false);

        const modelToggle = () => setIsOpen(!isOpen);
        console.log(isOpen);
  return (
    <>
    <CardWrapper>
        <CardHeader>
                <Avatar src={image} alt=''/>
                <H4>{username}</H4>
                <Span>{createAt}</Span>
            </CardHeader>
            <CardBody>
                <Content>
                    <SigneNumber>@{replyingTo}</SigneNumber>{content}
                </Content>
            </CardBody>
            <CardFooter>
                <Score>
                    <Signe>+</Signe>
                    <SigneNumber>{score}</SigneNumber>
                    <Signe>-</Signe>
                </Score>
                {isCurrentUser ? (
                         <Reply>
                            <ReplyImg src='./images/icon-reply.svg' alt=''/>
                            <ReplyText>Reply</ReplyText>
                        </Reply>
                    ): (
                        <UpdateButton>
                            <ReplyUp onClick={modelToggle}>
                                <ReplyImgUp src='./images/icon-delete.svg' alt=''/>
                                <ReplyTextUpda>Delete</ReplyTextUpda>
                            </ReplyUp>
                            <ReplyUp>
                                <ReplyImgUp src='./images/icon-edit.svg' alt=''/>
                                <ReplyTextUpda>Edit</ReplyTextUpda>
                            </ReplyUp>
                        </UpdateButton>
                       
                    )}
                
            </CardFooter>
    </CardWrapper>
    <DeleteModal onModal={modelToggle} isOpen={isOpen}/>
    </>
  )
}

export default SubCard