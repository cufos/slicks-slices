const { default: styled } = require('styled-components');

export const HomePageGrid = styled.div`
   display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

// Singele Grid Item (for home page)

export const ItemStyles = styled.div`
  text-align: center;
  position: relative;

  img {
    height: 30rem;
    font-size: 0;
    width:25rem;
    object-fit:cover;
  }

  p {
    transform: rotate(-2deg) translateY(-10px);
    top:0;
    margin:0;
    position: absolute;
    width: 100%;
    left: 0;
    font-size:2rem;
    font-size:clamp(12px,5vw,20px);
  }

  .mark {
    display: inline;
  }

  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
`;
