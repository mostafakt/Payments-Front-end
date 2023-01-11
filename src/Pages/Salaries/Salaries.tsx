import axios from "axios";
import React, { useState, useEffect } from "react";
import { TabContainer, Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { gitHeader } from "../Login/Login";
import { Input, SalaryContainer, Add, PaidContainer } from "./Salaries.Style";
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
  const [isOpen, setIsOpen] = useState(false);
  const fetch = async () => {
    await axios
      .get("http://127.0.0.1:8000/salary/", {
        headers: gitHeader(),
      })
      .then((response) => {
        setSalaries(response.data);
      });
  };
  const AddPaid = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/salary/",
        {
          id: 14,
          name: "sss",
          paidAmount: -1222,
          date: "2023-01-01",
          salary: 6,
        },
        {
          headers: {
            Authorization: "Token 5578d3bc1838429828f47c5763cca56ec2e36fbe",
          },
        }
      )
      .then((res) => {
        console.log(res);
        fetch();
      })
      .catch((r) => {
        console.log(r);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <TabContainer>
        {salaries?.map((t) => (
          <>
            <SalaryContainer>
              <span>{t.name}</span>
              <Input>{t.currsalaryAmount}</Input>
              <Add
                onClick={() => setIsOpen(true)}
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

        {isOpen && (
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  AddPaid();
                  setIsOpen(false);
                }}
              >
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        )}
      </TabContainer>
    </>
  );
};

export default Salaries;
