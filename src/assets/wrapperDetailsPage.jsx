import styled from "styled-components";

const WrapperDetailsPage = styled.div`
       .container {
              // layout
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-template-rows: 1fr 4fr;
              grid-template-areas: "quadrant_1 quadrant_3"
                                   "quadrant_2 quadrant_4";
              gap: 2rem;
              width: 60%;
              margin: 2rem auto;
              align-items: center;
              justify-content: center;
       }
       img {
              width: 450px;
              border-radius: var(--borderRadius);
       }
       .grid_1 {
              // layout
              grid-area: quadrant_1;
       }
       .grid_2 {
              // layout
              grid-area: quadrant_2;
       }
       .grid_3 {
              // layout
              grid-area: quadrant_3;
              h3{
                     // font
                     font-size: 50px;
                     font-weight: normal;
                     text-transform: capitalize;
                     // layout
                     padding-left: 3rem;
              }
       }
       .grid_4 {
              // layout
              grid-area: quadrant_4;
       }
       .info{
              // layout
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;
       }
       .info_title{
              // font
              font-size: 20px;
              font-weight: bold;
              text-transform: capitalize;
              // looks
              background-color: var(--primary-500);
              border: none;
              border-radius: var(--borderRadius);
              opacity: 0.7;
              // layout
              padding: 0.3rem 0.5rem;
       }
       p{
              // font
              font-size: 18px;
              font-weight: 600;
       }
       .link{
              // font
              font-size: 18px;
              font-weight: 500;
              text-transform: capitalize;
              text-decoration: none;
              color: var(--white);
              // layout
              margin-left: 1rem;
              margin-bottom: 1rem;
              padding: 0.3rem 0.8rem;
              // looks
              background-color: var(--primary-500);
              border-radius: var(--borderRadius);
              opacity: 0.7;

       }
`; export default WrapperDetailsPage;