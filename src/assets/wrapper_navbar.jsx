import styled from 'styled-components';

const WrapperNavbar = styled.div`
       .navbar-wrapper {
              // looks
              background: var(--white);
              height: 5rem;
       }
       .container {
              // layout
              display: flex;
              justify-content: space-between;
              width: 60%;
              margin: 0 auto;
              padding-top: 1rem;
              align-items: center;
       }
       ul{
              // layout
              display: flex;
              gap: 1rem;
              // looks
              list-style: none;
       }
       .nav_list {
              // font
              font-size: var(--fontSize);
              font-weight: var(--defaultWeight);
              letter-spacing: var(--letterSpacing);
              color: var(--grey-500);
              text-transform: capitalize;
       }
       a {
              text-decoration: none;
       }
       .active {
              // font
              color: var(--primary-500);
       }
       li:hover, li:active{
              // font
              color: var(--primary-500);
       }
`; export default WrapperNavbar;