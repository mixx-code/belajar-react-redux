import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

const AddKontak = () => {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReduser);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("1. masuk handleSubmit");
    event.preventDefault();
    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  useEffect(() => {
    if (addKontakResult) {
      console.log("5. masuk Component did Update");
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);
  return (
    <div>
      <h4>Add Kontak</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama . . ."
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="Nohp . . ."
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
