import PropTypes from 'prop-types';

import { BtnWrapper, ButtonStat } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onIncrement }) => {
    return <BtnWrapper>
        <ButtonStat onClick={onIncrement} name='good'>Good</ButtonStat>
        <ButtonStat onClick={onIncrement} name='neutral'>Neutral</ButtonStat>
        <ButtonStat onClick={onIncrement} name='bad'>Bad</ButtonStat>
    </BtnWrapper>
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onIncrement: PropTypes.func.isRequired,
}
