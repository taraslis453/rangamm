import styled from "styled-components";
import PropTypes from 'prop-types';
export const FormWrapper = styled.div`
    background-color: ${props => props.navForm ? '#eee' : 'white'};
    border: ${props => props.error ? '2px solid red' : '2px solid transparent'};
    border-radius: ${props => props.navForm ? '25px' : null};
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    overflow: hidden;
    height: 40px
`;

FormWrapper.propTypes = {
    navForm: PropTypes.bool
}