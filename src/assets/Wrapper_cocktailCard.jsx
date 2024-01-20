import styled from "styled-components";

const Wrapper_cocktailCard = styled.div`
       .card{
              // size
              width: 100%;
              height: 100%;
              // looks
              background-color: var(--white);
              border-radius: var(--borderRadius);
       }
       .card:hover{
              -webkit-transform: scale(0.95);
              -ms-transform: scale(0.95);
              transform: scale(0.95);
              transition: var(--transition);
              box-shadow: var(--shadow-4);
       }
       img{
              // size
              width: 100%;
              height: 50%;
              // layout
              display: block;
              object-fit: cover;
              // looks
              border-top-left-radius: var(--borderRadius);
              border-top-right-radius: var(--borderRadius);
       }
       .card_info{
              margin-top: 2rem;
              margin-left: 2rem;
              margin-bottom: 2rem;
       }
       .title{
              // font
              font-size: 30px;
       }
       .glass{
              // font
              font-size: 25px;
              font-weight: var(--fontW);
       }
       .alcohol{
              font-size: 15px;
              font-weight: var(--fontWeight);
              letter-spacing: var(--letterSpacing);
       }
       .btn{
              // layout
              margin-top:0;
              margin-left: 2rem;
              padding: 0.5rem 2rem;
              // looks
              background-color: var(--primary-500);
              border: none;
              border-radius: 5px;
              cursor: pointer;
              // font
              text-transform: capitalize;
              font-size: 15px;
              font-weight: 500;
              color: var(--mainWhite);
              letter-spacing: var(--letterSpacing); 
       }
`; export default Wrapper_cocktailCard;