import axios from "axios";
import React, { useState, useEffect } from "react";
import { TabContainer, Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
// import Button  from "react-bootstrap/esm/Button";
import { useQuery } from "react-query";
import { gitHeader } from "../Login/Login";
import {
  Input,
  SalaryContainer,
  Add,
  PaidContainer,
  ModalContainer,
  Container,
} from "./Salaries.Style";
type SalaryType = {
  id: number;
  paids: {
    id: number;
    name: string;
    paidAmount: number;
    date: string;
    salary: number;
  }[];
  name: string;
  salaryAmount: number;
  currsalaryAmount: number;
  date: string;
};
const Salaries = () => {
  const [salaries, setSalaries] = useState<SalaryType[]>([]);
  const [isPaidOpen, setIsPaidOpen] = useState(false);
  const [paid, setPaid] = useState({
    name: "",
    paidAmount: 0,
    date: "2023-01-01",
    salary: "1",
  });
  const [isSalatyOpen, setIsSalaryOpen] = useState(false);
  const [salary, setSalary] = useState({
    name: " ",
    salaryAmount: 1,
    currsalaryAmount: 0,
    date: "2023-01-11",
  });
  const { data, isLoading, refetch } = useQuery("fetch", () =>
    axios.get("http://127.0.0.1:8000/salary/", {
      headers: gitHeader(),
    })
  );
  const fetch = async () => {
    // await axios
    //   .get("http://127.0.0.1:8000/salary/", {
    //     headers: gitHeader(),
    //   })
    //   .then((response) => {
    //     setSalaries(response.data);
    //   });
  };
  const AddSalary = async () => {
    await axios
      .post("http://127.0.0.1:8000/salary/", salary, {
        headers: {
          Authorization: "Token 5578d3bc1838429828f47c5763cca56ec2e36fbe",
        },
      })
      .then((res) => {
        console.log(res);
        fetch();
      })
      .catch((r) => {
        console.log(r);
      });
  };
  const AddPaid = async () => {
    await axios
      .post("http://127.0.0.1:8000/paid/", paid, {
        headers: {
          Authorization: "Token 5578d3bc1838429828f47c5763cca56ec2e36fbe",
        },
      })
      .then((res) => {
        console.log(res);
        // fetch();
        refetch();
      })
      .catch((r) => {
        console.log(r);
      });
  };
  useEffect(() => {
    setSalaries(data?.data);
  }, [data]);
  useEffect(() => {
    console.log(paid);
    // console.log(salaries);
  }, [paid]);

  return (
    <>
      <Container>
        <Button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsSalaryOpen(true)}
          variant="contained"
        >
          add salary
        </Button>

        {salaries?.map((t) => (
          <>
            <SalaryContainer>
              <span>{t.name}</span>
              <Input>{t.currsalaryAmount}</Input>
              <Add
                onClick={() => {
                  setPaid({ ...paid, salary: String(t.id) });
                  console.log(salaries);

                  setIsPaidOpen(true);
                }}
                src="https://www.svgrepo.com/download/170952/add-button.svg"
              ></Add>
            </SalaryContainer>
            {t.paids.map((s) => (
              <PaidContainer>
                <span>{s.name}</span>
                <Input>{s.paidAmount}</Input>
              </PaidContainer>
            ))}
          </>
        ))}
        <ModalContainer>
          {" "}
          {isPaidOpen && (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Add Paid</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <>
                  <input
                    className="form-control mt-1"
                    placeholder="Name"
                    onChange={(e) => {
                      setPaid({ ...paid, name: e.target.value });
                    }}
                    value={paid.name}
                  />
                  <input
                    className="form-control mt-1"
                    placeholder="Paid Amount"
                    onChange={(e) => {
                      setPaid({ ...paid, paidAmount: Number(e.target.value) });
                    }}
                    value={paid.paidAmount}
                  />{" "}
                  <input
                    className="form-control mt-1"
                    placeholder="date"
                    onChange={(e) => {
                      setPaid({ ...paid, date: e.target.value });
                    }}
                    value={paid.date}
                  />
                </>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  // variant="secondary"
                  onClick={() => setIsPaidOpen(false)}
                >
                  Close
                </Button>
                <Button
                  // variant="primary"
                  onClick={() => {
                    AddPaid();
                    setIsPaidOpen(false);
                  }}
                >
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          )}
          {isSalatyOpen && (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Add salary</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <>
                  <input
                    className="form-control mt-1"
                    placeholder="Name"
                    onChange={(e) => {
                      setSalary({ ...salary, name: e.target.value });
                    }}
                    value={salary.name}
                  />
                  <input
                    className="form-control mt-1"
                    placeholder="salary Amount"
                    onChange={(e) => {
                      setSalary({
                        ...salary,
                        salaryAmount: Number(e.target.value),
                      });
                      setSalary({
                        ...salary,
                        currsalaryAmount: Number(e.target.value),
                      });
                    }}
                    value={salary.salaryAmount}
                  />
                  <input
                    className="form-control mt-1"
                    placeholder="date"
                    onChange={(e) => {
                      setSalary({ ...salary, date: e.target.value });
                    }}
                    value={salary.date}
                  />
                </>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  // variant="secondary"
                  onClick={() => setIsSalaryOpen(false)}
                >
                  Close
                </Button>
                <Button
                  // variant="primary"
                  onClick={() => {
                    AddSalary();
                    setIsSalaryOpen(false);
                  }}
                >
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          )}
        </ModalContainer>
      </Container>
    </>
  );
};

export default Salaries;
