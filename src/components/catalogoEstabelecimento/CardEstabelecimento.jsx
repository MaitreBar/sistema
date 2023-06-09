import React from "react";
import imagemEstabelecimento from "../../assets/estabelecimentos/bar-amarelo.png";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";

function CardEstabelecimento(props) {
  const navigate = useNavigate();

  function lotacao() {
    let i = 0;
    let qtd = props.estabelecimento.assentos.length;
    let qtdDisponivel = 0;
    props.estabelecimento.assentos.map((assento) => {
      if (assento.disponivel) {
        qtdDisponivel++;
      }
    });

    if ((qtdDisponivel / qtd) * 100 < 50) {
      return <p style={{ color: "black" }}>Cheio</p>;
    } else if (
      (qtdDisponivel / qtd) * 100 >= 50 &&
      (qtdDisponivel / qtd) * 100 < 75
    ) {
      return <p style={{ color: "red" }}>Alta</p>;
    } else if (
      (qtdDisponivel / qtd) * 100 >= 75 &&
      (qtdDisponivel / qtd) * 100 < 100
    ) {
      return <p style={{ color: "yellow" }}>Média</p>;
    } else if ((qtdDisponivel / qtd) * 100 >= 100) {
      return <p style={{ color: "green" }}>Baixa</p>;
    }
  }

  return (
    <div className="boxLista">
      <div className="containerImagemListaEstabelecimento">
        <img src={imagemEstabelecimento} alt="" />
      </div>
      <div className="containerDetalheEstabelecimento">
        <b>Nome: {props.estabelecimento.nome}</b>
        <p>
          Endereço: {props.estabelecimento.logradouro},{" "}
          {props.estabelecimento.numero}
        </p>
        <br />
        <b>Faixa de preço: </b>
        <p>De R$ a R$</p>
        <div className="containerTags"></div>
      </div>
      <div className="containerSituacaoEstabelecimento">
        <img src="" alt="" />
        <b className="fontOld">0.0</b>
        <p>Capacidade: {props.estabelecimento.assentos.length}</p>
        <b>Lotação: </b>
        <p>{lotacao()}</p>
        <button
          className="btnSistema btnMedio"
          type="button"
          onClick={() => {
            const propriedades = {
              dadosEstabelecimento: props.estabelecimento,
              usuarioLogado: props.usuario,
            };
            navigate("/catalogo/detalhes", {
              state: propriedades,
            });
          }}
        >
          Exibir detalhes
        </button>
      </div>
    </div>
  );
}

export default CardEstabelecimento;
