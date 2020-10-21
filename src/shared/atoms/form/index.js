import styled from "styled-components";
import PropTypes from 'prop-types';
export const Form = styled.form`
    background-color: ${props => props.navForm ? '#eee' : 'white'};
    border: 0;
    border-radius: ${props => props.navForm ? '25px' : null};
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    overflow: hidden;
    height: 40px
`;

Form.propTypes = {
    navForm: PropTypes.string
}