import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  text-align: center;
  padding: 1.5rem;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function Beers({ data }) {
  return (
    <>
      <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
      <h2 className="center">
        We have {data.beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <BeerGrid>
        {data.beers.nodes?.map((beer) => {
          const ratings = Math.random(beer.rating.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              <span>{beer.price}</span>
              <p title={`${ratings} out of 5 stars`}>
                {`⭐`.repeat(ratings)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - ratings)}
                </span>
                <span>{beer.rating.reviews}</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGrid>
    </>
  );
}

export const queyr = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
