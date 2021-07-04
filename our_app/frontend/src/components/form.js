import React, { useState, useEffect } from "react";

import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TranslateForm() {
  const [variable, setVariable] = useState({});
  const [data, setdata] = useState({});
  const [lenCsv, setlenCsv] = useState(0);
  const [lenSent, setlenSent] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        //console.log("SUCCESS", response);
        setVariable(response);
        setdata(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...data,
      code_mixed_sentence: data.code_mixed_sentence,
      code_mixed_slots: data.code_mixed_slots,
    };

    axios
      .post("http://localhost:5000/data", obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(obj);
    window.location.reload();
  };

  const handleCSV = (event) => {
    setdata({ ...data, code_mixed_slots: event.target.value });
    setlenCsv(event.target.value.split(",").length);
  };
  const handleTranslation = (event) => {
    setdata({
      ...data,
      code_mixed_sentence: event.target.value,
    });
    setlenSent(event.target.value.split(" ").length);
  };

  const malvika = {
    width: "75vmax",
  };

  return (
    <>
      {data ? (
        <>
          {variable.status === 200 ? (
            <h3>{data.sentence}</h3>
          ) : (
            <h3>LOADING</h3>
          )}

          <div>
            {variable.status === 200 ? <h5>{data.slots}</h5> : <h3>LOADING</h3>}
          </div>
        </>
      ) : (
        <div>
          <h3> BRO Y'ALL ARE DONE!!!!</h3>
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Translation</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleTranslation}
            style={malvika}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Slots</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleCSV}
            style={malvika}
          />
        </Form.Group>
        {((lenCsv === lenSent) && (lenCsv !== 0)) ? (
          <Button variant="primary" type="submit">
            ADD
          </Button>
        ) : (
          <Button disabled>Numbers not equal</Button>
        )}
      </Form>
    </>
  );
}

export default TranslateForm;
