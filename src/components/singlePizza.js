import { Link } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the pizzastyles div, but from the PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --row: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;

  h2,
  p {
    margin: 0;
  }
`;

export default function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}
