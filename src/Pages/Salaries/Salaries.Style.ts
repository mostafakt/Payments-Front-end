import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SalaryContainer = styled.div`
  width: 202px;
  border-radius: 50px;

  background-color: gold;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  span {
    color: black;
  }
  justify-content: space-between;
`;
const PaidContainer = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  width: 202px;
  border-radius: 50px;

  background-color: cyan;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  span {
    color: black;
  }
  justify-content: space-between;
`;
const Input = styled.div`
  // needs to be relative so the :focus span is positioned correctly
  position: relative;

  // bigger font size for demo purposes
  font-size: 1.5em;

  // the border gradient
  background: linear-gradient(21deg, #10abff, #1beabd);

  // the width of the input border
  padding: 3px;

  // we want inline fields by default
  display: inline-block;

  // we want rounded corners no matter the size of the field
  border-radius: 9999em;

  // style of the actual input field
  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.325em;
    z-index: 1; // needs to be above the :focus span

    // summon fancy shadow styles when focussed
    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }

  // we don't animate box-shadow directly as that can't be done on the GPU, only animate opacity and transform for high performance animations.
  span {
    transform: scale(0.993, 0.94); // scale it down just a little bit
    transition: transform 0.5s, opacity 0.25s;
    opacity: 0; // is hidden by default

    position: absolute;
    z-index: 0; // needs to be below the field (would block input otherwise)
    margin: 4px; // a bit bigger than .input padding, this prevents background color pixels shining through
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none; // this allows the user to click through this element, as the shadow is rather wide it might overlap with other fields and we don't want to block those.

    // fancy shadow styles
    box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
      -3px 3px 30px #10abff;
  }
`;
const Add = styled.img`
  width: 40px;
  height: 40px;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export {
  Container,
  SalaryContainer,
  Input,
  Add,
  PaidContainer,
  ModalContainer,
};
