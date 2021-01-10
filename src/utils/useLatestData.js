import { useState, useEffect } from 'react';

const gql = String.raw;

const deets = `
            name
            _id
            image {
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
`;

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();

  // slicemaster
  const [slicemasters, setSlicemasters] = useState();

  //  Use a side effect to fetch the data from graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      });
  }, []);

  return {
    hotSlices,
    slicemasters,
  };
}
