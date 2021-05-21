import "./App.css";
import React, { useState } from "react";
import "../node_modules/bulma/css/bulma.min.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  const [monState, setMonState] = useState([
    { tache: "Promener le chien", txt: "Une fois à 8h, une fois à 19h" },
    { tache: "Prèparer le repas", txt: "Acheter du poisson et du riz" },
    { tache: "Créer une app web", txt: "Apprendre React" },
  ]);

  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  const creationCarte = (e) => {
    e.preventDefault();
    const nvTab = [...monState, { tache: tache, txt: txt }];
    setMonState(nvTab);
    console.log(nvTab);
    setTache("");
    setTxt("");
  };

  const supprCarte = (index) => {
    const tabNettoyage = [...monState];

    console.log(index);
    // console.log(
    //   tabNettoyage.filter(
    //     (item) =>
    //       tabNettoyage.indexOf(item) !==
    //       tabNettoyage.indexOf(tabNettoyage[index])
    //   )
    // );

    setMonState(
      tabNettoyage.filter(
        (item) =>
          tabNettoyage.indexOf(item) !==
          tabNettoyage.indexOf(tabNettoyage[index])
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container px-3">
        <h2 className="title mt-5">Rentrez vos taches à faire</h2>
        <form onSubmit={creationCarte}>
          <div className="field">
            <div className="control">
              <label htmlFor="tache" className="label">
                {" "}
                Tache
              </label>
              <input
                value={tache}
                className="input"
                type="text"
                id="tache"
                placeholder="Une tache à faire"
                onChange={(e) => setTache(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="txt" className="label">
                {" "}
                Contenu de la tache
              </label>
              <textarea
                value={txt}
                className="textarea"
                type="text"
                id="txt"
                placeholder="Une tache à
              faire"
                onChange={(e) => setTxt(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="control">
            <button type=" submit" className="button is-link">
              Créer une tache
            </button>
          </div>
        </form>

        {monState.map((todo, index) => (
          <Card
            key={index}
            index={index}
            tache={todo.tache}
            txt={todo.txt}
            supprFunc={supprCarte}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
