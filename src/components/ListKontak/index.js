import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, getListKontak } from "../../actions/kontakAction";

const ListKontak = () => {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReduser);
  const dispatch = useDispatch();
  useEffect(() => {
    //panggil action getListKontak
    console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);
  useEffect(() => {
    //panggil action getListKontak
    console.log("5. use effect component did update");
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} -{kontak.nohp} -
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading . . . .</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data kosong"}</p>
      )}
    </div>
  );
};

export default ListKontak;
