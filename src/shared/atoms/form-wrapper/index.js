import styled from "styled-components";
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types';
export const FormWrapper = styled.form`
    background-color: ${ifProp('navForm', '#eee', 'white')};
    border: ${ifProp('error', '2px solid red', '2px solid transparent')};
    border-radius: ${ifProp('navForm', '25px')};
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    max-width: 90%;
    transition: all .2s ease;
    &:hover {
        border: ${ifProp('navForm', '2px solid #d1d1d1')};
        background-color: ${ifProp('navForm', '#fff')};
    }
`;

FormWrapper.propTypes = {
    navForm: PropTypes.bool
}