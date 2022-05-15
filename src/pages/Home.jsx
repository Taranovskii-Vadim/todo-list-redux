import React, { useEffect } from "react";
import { connect } from "react-redux";

import { remove, loadNotes } from "../redux/Firebase/creators";

import Form from "../components/Form";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import ListNotes from "../components/ListNotes";

const Home = ({ notes, loading, loadAllNotes, removeNote }) => {
  useEffect(() => {
    loadAllNotes();
  }, []);

  return (
    <main>
      <Alert />
      <Form />
      <hr />
      {loading ? (
        <Loader />
      ) : (
        <ListNotes notes={notes} removeNote={removeNote} />
      )}
    </main>
  );
};

const mapStateToProps = ({ firebase }) => ({
  notes: firebase.notes,
  loading: firebase.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadAllNotes: () => dispatch(loadNotes()),
  removeNote: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
