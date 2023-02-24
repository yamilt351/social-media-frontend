import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`

`;

function Login() {
  const [Log, setLog] = useState(false);

  return (
    <Section>
      <Container>
        <form></form>
        <button></button>
      </Container>
    </Section>
  );
}

export default Login;
