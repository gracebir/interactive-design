import styled from "styled-components"
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
    width: 90%;
    min-height: 15rem;
    display:flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 5px;
    padding: 1.5em;
    background-color: var(--white);
`

const WarnText = styled.p`
    color: var(--grayish-blue);
    font-size: 18px;
`

const TitleText = styled.span`
    font-weight: 500;

`

const ButtonWrapper = styled.div`
    display: flex;
   justify-content:space-between ;
`

const CancelButton = styled.button`
    padding: 1em 2em;
    background-color: var(--grayish-blue);
    border: none;
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--white);
    font-size: .8em;
`

const DeleteButton = styled.button`
    padding: 1em 2em;
    background-color: var(--soft-red);
    border: none;
    font-family: 'Rubik', sans-serif;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8em;
    color: var(--white);
`

type ModalProps = {
    isOpen: boolean
    onModal: () => void
}

function DeleteModal({
    isOpen=false,
    onModal
}:ModalProps) {
  return (
    <StyledModal
    isOpen={isOpen}
    onBackgroundClick={onModal}
    >
        <TitleText>Delete comment</TitleText>
        <WarnText>
            Are you sure you want to delete this comment? This will
            remove the comment and can't be undone.
        </WarnText>
        <ButtonWrapper>
        <CancelButton onClick={onModal}>no, cancel</CancelButton>
        <DeleteButton>yes, delete</DeleteButton>
        </ButtonWrapper>
    </StyledModal>
  )
}

export default DeleteModal