import PropTypes from 'prop-types';
import styled from 'styled-components';

FooterStyledComponent.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    headingFont: PropTypes.string.isRequired,
    fontFamilyHeader: PropTypes.string.isRequired,
    fontSizeHeader: PropTypes.string.isRequired,
};

const FooterStyledComponent = styled.footer`
    background-color: ${({ primaryColor }) => primaryColor};
    color: ${({ headingFont }) => headingFont};

    p {
        font-family: ${({ fontFamilyHeader }) => fontFamilyHeader};
        font-size: ${({ fontSizeHeader }) => fontSizeHeader};
    }

    a {
        color: ${({ headingFont }) => headingFont};
        text-decoration: none;
    }

    a:hover {
        color: ${({ primaryColor }) => primaryColor};
    }

    @media (max-width: 600px) {
        p {
            font-size: 14px;
        }
    }
`;

export default FooterStyledComponent;
