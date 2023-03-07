import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Card.css";
import "./Modal.css";
import nes from "../../assets/nes.jpg";
import Modal from "react-bootstrap/Modal";
import { TbCurrencyEthereum } from "react-icons/tb";
import { hero } from "../../data/Data";
import abtm from "../../assets/abtm.jpg";
const Card = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const refs = () => {
    window.location.href = "https://opensea.io/collection/mocaverse";
  };
  return (
    <>
      <div className="container gen-main-div">
        {hero.map((item) => (
          <div class="card-container" key={item.id}>
            <div class="hero-image-container">
              <img
                class="hero-image"
                src={item.image}
                alt="Spinning glass cube"
              />
            </div>
            <main class="main-content">
              <h4 className="h-div-font">{item.name}</h4>
            </main>
            <div className="small-avatar-div">
              {" "}
              <img src={item.imgCreatedby} alt="avatar" class="small-avatar" />
            </div>
            <div className="bid-div-place">
              <div class="card-attribute">
                <p className="p-card-p">
                  Created by
                  <span class="span-span">
                    <h6>{item.createdby} </h6>
                  </span>
                </p>
              </div>
              <div class="time-left">
                <p className="p-card-p" type="button" onClick={handleShow}>
                  View Details
                </p>
              </div>
            </div>

            <div className="bid-div-place">
              <div className="pl-btn-div">
                <Button
                  onClick={handleShow}
                  size="large"
                  className="pl-btn"
                  style={{ color: "white" }}
                >
                  Place Bid
                </Button>
              </div>

              <div class="coin-base">
                <div>
                  <div>
                    <span class="span-span">
                      {" "}
                      <TbCurrencyEthereum className="icon-dis" />
                    </span>

                    <span class="span-span">Curent Bid</span>
                  </div>
                  <div className="text-center et-h">{item.curentBid} </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Modal show={show} onHide={handleClose} className="modal-main-div">
          <Modal.Header closeButton>
            <Modal.Title>Guard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="bid-div-place">
              <div className="modal-left-div">
                <img src={nes} alt="m,k" className="modal-img-img" />
              </div>
              <div className="modal-right-div">
                <h4>Guard</h4>

                <div className="small-avatar-div">
                  <img src={abtm} alt="avatar" class="small-avatar" />
                </div>
                <di>
                  {" "}
                  <p>Owner's Adress</p>
                  <p className="h-h7">gf6rh83874fnnv</p>
                </di>
                <div>
                  <p>Description</p>
                  <p>
                    This is a sample data, let me just add my own description in
                    other to clearify my buyers. i think am done or should i
                    write more..
                  </p>
                </div>
                <div>
                  <Button
                    className="pl-btn"
                    style={{ color: "white" }}
                    onClick={refs}
                  >
                    PLACE A BID
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Card;
