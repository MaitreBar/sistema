import api from "../../api";
import "./styleListaReserva.css"

function ListaReserva(props) {

    function cancelarReserva(reserva) {
        const delet = {
            id: reserva.id,
            checkOut: true,
        }

        api
        .put(`/reservas/${reserva.id}`, delet)
        .then((response) => {
          console.log(response);
          props.atualizar();
        })
        .catch((err) => console.error(err));
    }

  return (
    <div className="container-reserva">
      <div className="dia-reserva">
        <span> Dia: {props.reserva.dtReserva} </span>
      </div>

      <div className="nome-reserva">
        <span> Nome do cliente: fazer depoissss</span>
      </div>

      <div className="horario-reserva">
        <span> Horário: {props.reserva.horaReserva}</span>
      </div>

      <div className="mesa-reserva">
        <span>
          {" "}
          Assento: {props.reserva.assentos.find((assento) => assento.id).id}
        </span>
      </div>

      <div className="Quantidade-reserva">
        <span>Quantidade pessoal: 1</span>
      </div>
      <div className="button-cancelar-reserva">
        <button onClick={() => cancelarReserva(props.reserva)} className="button-cancelar"> Cancelar reserva </button>
      </div>
    </div>
  );
}

export default ListaReserva;