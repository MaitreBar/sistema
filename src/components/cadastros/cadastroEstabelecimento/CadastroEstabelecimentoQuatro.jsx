import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import React, { useState } from "react";

function CadastroEstabelicimentoQuatro() {
  const [tagSelecionadas, setTagSelecionadas] = useState([]);
  const [textoSelecao, setTextoSelecao] = useState("");
  const [novaTag, setNovaTag] = useState("");

  const [tags, setTags] = useState([
    "Drinks",
    "Não Alcóolicas",
    "Cerveja",
    "Japonesa",
    "Fast-food",
    "Petiscos",
    "Feijoada",
    "Pizza",
    "Shows",
    "Raggae",
    "Trap",
    "Samba",
    "Raggae",
    "Trap",
    "Samba",
    "Raggae",
    "Trap",
    "Samba",
  ]);

  const handleTagClick = (tag) => {
    if (tagSelecionadas.includes(tag)) {
      setTagSelecionadas(tagSelecionadas.filter((f) => f !== tag));
    } else {
      if (tagSelecionadas.length < 6) {
        setTagSelecionadas([...tagSelecionadas, tag]);
      }
    }
  };

  const handleTextoChange = (event) => {
    setTextoSelecao(event.target.value);
  };

  const handleNovaTagChange = (event) => {
    setNovaTag(event.target.value);
  };

  const handleAdicionarTag = () => {
    if (novaTag.trim() !== "" && !tags.includes(novaTag)) {
      setTags([...tags, novaTag]);
      setNovaTag("");
    }
  };

  return (
    <section>
      <NavbarDeslogada />
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p
            className="tituloContainer colorBlack"
            alt="Cadastre seu estabelecimento"
          >
            Cadastre seu estabelecimento
          </p>
          <p className="txtDecisao">
            <b> 4 - 4</b>
          </p>
          <form onSubmit="" className="formulario">
            <p className="colorBlack">Tags</p>
            <div className="alinhamento-tags">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btnSistema btnTag"
                  id={`fruta ${
                    tagSelecionadas.includes(tag) ? "selecionada" : ""
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Digite a nova tag"
              value={novaTag}
              onChange={handleNovaTagChange}
            />
            <button
              className="btnSistema btnMedio"
              onClick={handleAdicionarTag}
            >
              Adicionar Tag
            </button>
            <button type="submit" className=" btnSistema btnMedio">
              Proximo
            </button>
            <button type="submit" className="btnSistema btnSemFundo">
              Voltar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CadastroEstabelicimentoQuatro;