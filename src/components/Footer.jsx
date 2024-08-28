import FooterStyledComponent from "./Footer/FooterStyledComponent";

const Footer = () => {
  return (
    <>
    <FooterStyledComponent theme={{ primaryColor: '#646cff', headingFont: '#f9fafb', fontFamilyHeader: 'Arial', fontSizeHeader: '24px' }}>
      <p>Reseñas App {new Date().getFullYear()}</p>
    </FooterStyledComponent>
    <FooterStyledComponent theme={{ primaryColor: '#61dafb', headingFont: '#1f2937', fontFamilyHeader: 'Arial', fontSizeHeader: '24px' }}>
        <p>
          Creado por <a href="https://github.com/pluska">Andres Pluska</a>
        </p>
    </FooterStyledComponent>
    </>
  );
};

export default Footer;
