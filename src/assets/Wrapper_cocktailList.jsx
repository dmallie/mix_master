import styled from "styled-components";

const Wrapper_cocktailList = styled.div`
       .container {
              // layout
              width: 60%;
              display: grid;
              gap: 3rem;
              grid-template-columns: repeat(auto-fill, 350px);
              grid-auto-rows: 450px;
              justify-content: center;
              margin: 0 auto;
       }
`; export default Wrapper_cocktailList;