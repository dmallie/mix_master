import styled from 'styled-components';

const WrapperSearchForm = styled.div`
       .container{
              // layout
              width: 35%;
              margin: 7rem auto 4rem auto;
              // looks
              background: var(--white);
              border-radius: var(--borderRadius);
              box-shadow: var(--shadow-4);
       }
       .form-section{
              // layout
              width: 75%;
              margin: 1rem auto;
              padding-top: 2rem;
              padding-bottom: 2rem;
       }
       .form-input{
              // layout
              width: 80%;
              padding: 0.7rem 1rem;
              // font
              font-size: var(--fontSize);
              // looks
              background: var(--grey-200);
              border-top-left-radius: var(--borderRadius);
              border-bottom-left-radius: var(--borderRadius);
              border: 1px solid var(--grey-200);
       }
       .form-input:focus{
              outline: 1px solid var(--primary-200);
       }
       .btn{
              // layout
              width: 20%;
              padding: 0.7rem 1rem;
              // looks
              background: var(--primary-500);
              border: 1px solid var(--primary-500);
              border-top-right-radius: var(--borderRadius);
              border-bottom-right-radius: var(--borderRadius);
              // font
              font-size: var(--fontSize);
              font-weight: var(--fontWeight);
              text-transform: capitalize;
              color: var(--white);
       }
`; export default WrapperSearchForm;