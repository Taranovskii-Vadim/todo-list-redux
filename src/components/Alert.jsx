import React from "react";
import { connect } from "react-redux";

import { hideAlert } from "../redux/Alert/creators";

const Alert = ({ alert, hide }) => {
  if (!alert.visible) return null;

  return (
    <div className={`alert alert-${alert.type} alert-dismissible`}>
      <strong>{alert.shortMessage}!</strong>
      &nbsp;
      {alert.text !== null
        ? `Заметка с текстом "${alert.text}" была успешно добавлена`
        : "Введите название заметки"}
      <button type="button" onClick={hide} className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const mapStateToProps = ({ alert }) => ({ alert });

const mapDispatchToProps = (dispatch) => ({
  hide: () => dispatch(hideAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
