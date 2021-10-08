import { useEffect, useState } from "react";
import {
  FlexContainer,
  GlobalCSS,
  TitleStyle,
  Dot,
  SalaStyle,
  Day,
  Row,
  Dane,
  Nazwa,
  Godzina,
  Poziom,
  Prowadzacy,
  DayTitle,
  WolneMiejsca,
  ResolutionsMenu,
  Button,
} from "./Styles/Styles";
import { saveAsPng } from "save-html-as-image";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import html2canvas from "html2canvas";
import { useForm } from "react-hook-form";
import { saveAs } from "file-saver";
function App() {
  let [scale, setScale] = useState(50);
  let [width, setWidth] = useState(1080);
  let [height, setHeight] = useState(1920);
  let [dane, setDane] = useState([
    [
      {
        godzina: "17:00",
        nazwa: "pole dance",
        poziom: "A1",
        prowadzaca: "Paula",
        wolne: "N",
      },
      {
        godzina: "18:00",
        nazwa: "pole dance",
        poziom: "B1",
        prowadzaca: "Paula",
      },
      {
        godzina: "19:00",
        nazwa: "pole dance",
        poziom: "A2",
        prowadzaca: "Sandra",
      },
    ],
    [
      {
        godzina: "17:00",
        nazwa: "pole dance",
        poziom: "A1",
        prowadzaca: "Maja",
      },
      {
        godzina: "18:00",
        nazwa: "exotic",
        poziom: "A/b",
        prowadzaca: "maja",
      },
      {
        godzina: "19:00",
        nazwa: "pole dance",
        poziom: "A1",
        prowadzaca: "maja",
        wolne: 2,
      },
      {
        godzina: "20:00",
        nazwa: "pole dance",
        poziom: "intro",
        prowadzaca: "ewelina",
      },
      {
        godzina: "21:00",
        nazwa: "pole dance",
        poziom: "intro",
        prowadzaca: "ewelina",
        wolne: "x",
      },
    ],
    [],
    [],
    [],
    [],
    [],
  ]);
  let [color, setColor] = useState("#d88076");
  let [tytul, setTytul] = useState("plan zajęć");
  let [sala, setSala] = useState("SALA 1");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let oldDane = dane;
    let index = nazwyDniTygodnia.findIndex((value) => {
      return value === data.dzien;
    });
    let zajecia = {
      godzina: data.godzina,
      nazwa: data.nazwa,
      poziom: data.poziom,
      prowadzaca: data.prowadzaca,
      wolne: data.wolneMiejsca,
    };
    oldDane[index].push(zajecia);
    setDane(oldDane);
  };

  let nazwyDniTygodnia = [
    "PONIEDZIAŁEK",
    "WTOREK",
    "ŚRODA",
    "CZWARTEK",
    "PIĄTEK",
    "SOBOTA",
    "NIEDZIELA",
  ];

  const wolneMiejscaMessage = (value) => {
    if (value === "N" || value === "n") {
      return (
        <WolneMiejsca color={color} style={{ fontWeight: "400" }}>
          NOWY NABÓR
        </WolneMiejsca>
      );
    } else if (value === "x" || value === "X") {
      return <WolneMiejsca color={color}>WOLNE MIEJSCA</WolneMiejsca>;
    } else {
      if (value === "" || value === " " || !value) {
        return null;
      }

      const lastDigit = value % 10;
      let message;
      switch (lastDigit) {
        case 1:
          message = "WOLNE MIEJSCE";
          break;
        case 2:
          message = "WOLNE MIEJSCA";
          break;
        case 3:
          message = "WOLNE MIEJSCA";
          break;
        case 4:
          message = "WOLNE MIEJSCA";
          break;
        default:
          message = "WOLNYCH MIEJSC";
      }
      return (
        <WolneMiejsca color={color}>
          {value} {message}
        </WolneMiejsca>
      );
    }
  };

  const prowadzacaMessage = (zajecia) => {
    let wolne = wolneMiejscaMessage(zajecia.wolne);
    console.log(zajecia.prowadzaca, " | ", typeof zajecia.prowadzaca);
    if (zajecia.prowadzaca === null || zajecia.prowadzaca === "") {
      if (wolne === null) {
        return "";
      } else {
        return <Prowadzacy> | </Prowadzacy>;
      }
    } else {
      if (wolne === null) {
        return <Prowadzacy>| {zajecia.prowadzaca.toUpperCase()} </Prowadzacy>;
      } else {
        return <Prowadzacy>| {zajecia.prowadzaca.toUpperCase()} |</Prowadzacy>;
      }
    }
  };

  return (
    <>
      <GlobalCSS></GlobalCSS>

      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          setScale(e.target.value);
        }}
        placeholder="scale"
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
      ></input>
      <div
        style={{
          width: "50%",
          border: "2px solid black",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Scale = {scale / 50}
      </div>
      <h1>WIDTH:</h1>
      <input
        type="number"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
      ></input>
      <h1>HEIGHT:</h1>
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
      ></input>
      <h1>COLOR:</h1>
      <select
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="#d88076">1</option>
        <option value="#CA4741">2</option>
      </select>

      <h1>TYTUŁ:</h1>
      <input
        type="text"
        onChange={(e) => {
          setTytul(e.target.value);
        }}
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
      ></input>

      <h1>SALA:</h1>
      <input
        type="text"
        onChange={(e) => {
          setSala(e.target.value);
        }}
        style={{ width: "50%", border: "2px solid black", fontSize: "2rem" }}
      ></input>

      <ResolutionsMenu>
        <Button
          onClick={() => {
            setWidth(1080);
            setHeight(1920);
          }}
        >
          Instagram Stories
        </Button>
        <Button
          onClick={() => {
            setWidth(1280);
            setHeight(1820);
          }}
        >
          Facebook Post
        </Button>
      </ResolutionsMenu>

      <FlexContainer
        id="toCapture"
        width={`${width}px`}
        height={`${height}px`}
        scale={scale}
      >
        <TitleStyle>
          {tytul} <Dot color={color} /> <SalaStyle> {sala}</SalaStyle>
        </TitleStyle>

        {dane.map((dzien, index) => {
          let node = [];

          if (dzien.length !== 0) {
            node.push(
              <DayTitle>
                <Day color={color}>{nazwyDniTygodnia[index]}</Day>
              </DayTitle>
            );

            dzien.forEach((zajecia) => {
              node.push(
                <Row>
                  <Godzina>{zajecia.godzina}</Godzina>
                  <Dane>
                    <Nazwa>{zajecia.nazwa.toUpperCase()}</Nazwa>
                    <Poziom>{zajecia.poziom.toUpperCase()}</Poziom>
                    {prowadzacaMessage(zajecia)}
                    {zajecia.wolne && wolneMiejscaMessage(zajecia.wolne)}
                  </Dane>
                </Row>
              );
            });
          }
          return node;
        })}
      </FlexContainer>
      {/* FORM TO UPLOAD NEW DATA */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("dzien")}>
          <option value="PONIEDZIAŁEK">PONIEDZIAŁEK</option>
          <option value="WTOREK">WTOREK</option>
          <option value="ŚRODA">ŚRODA</option>
          <option value="CZWARTEK">CZWARTEK</option>
          <option value="PIĄTEK">PIĄTEK</option>
          <option value="SOBOTA">SOBOTA</option>
          <option value="NIEDZIELA">NIEDZIELA</option>
        </select>

        <label for="godzina">Godzina:</label>
        <input
          id="godzina"
          {...register("godzina", { required: "Podaj godzinę" })}
          placeholder="np. 18:00"
        ></input>

        <label for="nazwa">Nazwa:</label>
        <input
          id="nazwa"
          {...register("nazwa", { required: "Podaj nazwe zajec" })}
          placeholder="np. POLE DANCE"
        ></input>

        <label for="poziom">Poziom:</label>
        <input
          id="poziom"
          {...register("poziom", { required: "Podaj poziom" })}
          placeholder="np. A2"
        ></input>

        <label for="prowadzaca">Prowadzaca:</label>
        <input
          id="prowadzaca"
          {...register("prowadzaca")}
          placeholder="np. ALA"
        ></input>

        <label for="wolneMiejsca">Wolne miejsca:</label>
        <input
          id="wolneMiejsca"
          {...register("wolneMiejsca")}
          placeholder="Ilość wolnych miejsc"
        ></input>
        <button id="submit" type="submit">
          DODAJ
        </button>
      </form>

      <Button
        onClick={() => {
          const actualZoom = Math.round(
            (window.outerWidth / window.innerWidth) * 100
          );
          let result = Math.abs(67 - actualZoom) <= 3 ? true : false;
          if (result) {
            let node = document.getElementById("toCapture");
            node.style.border = "none";
            html2canvas(node).then((canvas) => {
              var image = canvas.toDataURL("image/png");

              window.saveAs(image, "test.png");
              node.style.border = "2px solid black";
            });
          } else {
            document.getElementById("toCapture").style.border =
              "2px solid black";
            alert(
              `(${result}) Klikaj 'Ctrl+' lub 'Ctrl-' dopóki stopień przybliżenia będzie wynosił 67%`
            );
          }
        }}
      >
        PNG
      </Button>

      {/* svg */}
      <Button
        onClick={() => {
          const actualZoom = Math.round(
            (window.outerWidth / window.innerWidth) * 100
          );
          let result = Math.abs(67 - actualZoom) <= 3 ? true : false;
          if (result) {
            let node = document.getElementById("toCapture");
            node.style.border = "none";

            htmlToImage.toSvg(node).then((dataURL) => {
              saveAs(new Blob([dataURL], { type: "image/svg" }), "name.svg");
              document.getElementById("toCapture").style.border =
                "2px solid black";
            });
          } else {
            document.getElementById("toCapture").style.border =
              "2px solid black";
            alert(
              `(${result}) Klikaj 'Ctrl+' lub 'Ctrl-' dopóki stopień przybliżenia będzie wynosił 67%`
            );
          }
        }}
      >
        SVG
      </Button>
    </>
  );
}

export default App;
