import styled, { createGlobalStyle } from "styled-components";

// plan zajec Playfair
// Sala LATO
// Dni LATO
// godziny Playfair
// dane LATO

export const GlobalCSS = createGlobalStyle`


html,body{
    margin: 0;
    padding: 0;
    background-color: white;
}
#root{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input, select, #submit{
  text-align: center;
  margin: 0 auto;
  display: block;
  width: 80%;
  font-size: 2rem;
}
label{
  text-align: center;
  margin: 0 auto;
  display: block;
  width: 80%;
  font-size: 2rem;
  margin-top:1.3rem;
}

*{
    box-sizing: border-box;
}
`;

export const FlexContainer = styled.div`
  background-color: white;
  margin-top: 2vh;
  display: flex;
  font-size: ${(props) => {
    return `${(props.scale / 50) * 2.3}rem`;
  }};
  flex-direction: column;
  align-items: center;
  width: ${(props) => {
    return props.width;
  }};
  height: ${(props) => {
    return props.height;
  }};
  border: 2px solid black;
`;

export const Dot = styled.div`
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 1em;
  margin-right: 0.5em;
`;

export const SalaStyle = styled.div`
  font-size: 1em;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;

export const TitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Playfair Display", serif;
  font-size: 1.1em;
  padding-left: 2.5em;
  padding-top: 4em;
  padding-bottom: 1em;
`;

export const Day = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: ${(props) => props.color};
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 0.8em;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 8fr;
  padding-left: 0.5em;
  width: 100%;
`;

export const DayTitle = styled.div`
  display: grid;
  grid-template-columns: 3fr 8fr;
  padding-left: 0.5em;
  width: 100%;
  margin-top: 1.5em;
`;

export const Dane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1em;
  font-size: 0.7em;
`;

export const Nazwa = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin-right: 0.3em;
`;

export const Poziom = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin-right: 0.3em;
`;

export const Prowadzacy = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin-right: 0.3em;
`;

export const WolneMiejsca = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: ${(props) => props.color};
`;

export const Godzina = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  font-size: 0.8em;
  font-family: "Playfair Display", serif;
  font-weight: bold;
`;

export const ResolutionsMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex: 1 0 20%;
  margin: 1rem;
`;

export const Button = styled.button`
  font-size: 2rem;
  margin: 0.3rem;
  border: 0.15rem solid black;
  border-radius: 0.3rem;
`;
