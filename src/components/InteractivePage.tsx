import styled from 'styled-components'
import Card, {Avatar} from './Card'
import data from '../data.json'
import SubCard from './SubCard'

const IntContainer = styled.div`
  margin: 2em .5em;
`
const FormContainer = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  padding: 1em;
  display: flex;
  flex-direction:column ;
  gap: 1.5em;
`

const InputArea = styled.textarea`
  color: var(--dark-blue);
  border-radius: 5px;
  border-color: var(--light-gray);
  width: 100%;
  height: 8rem;
  padding: 1em;
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  &:focus-visible{
    outline:none ;
  }
`

const Button = styled.button`
  border: none;
  background-color: var(--moderate-blue);
  color: var(--white);
  padding: 1rem 2em;
  border-radius: 6px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
`
const MobContainer = styled.div`
  display: flex;
  justify-content:space-between ;
  align-items: center;
`

function InteractivePage() {

  return (
    <IntContainer>
      <>
        {data.comments.map((comment, index)=>(
          <>
            <Card
            key={index}
            content={comment.content}
            image={comment.user.image.png}
            score= {comment.score}
            username= {comment.user.username}
            createAt = {comment.createdAt}
            />
           
            {comment.replies?.map((reply)=>(
              <SubCard
              content={reply.content}
              image={reply.user.image.png}
              isCurrentUser={!(data.currentUser.username===reply.user.username)}
              score= {reply.score}
              username= {reply.user.username} 
              createAt = {reply.createdAt}
              replyingTo={reply.replyingTo}
            />
          ))}
          </>
        ))}
      </>
      <FormContainer>
        <InputArea 
        placeholder='Add a comment...' 
       >
        </InputArea>
        <MobContainer>
          <Avatar src={data.currentUser.image.png} alt=''/>
          <Button>send</Button>
        </MobContainer>
      </FormContainer>
    </IntContainer>
  )
}

export default InteractivePage