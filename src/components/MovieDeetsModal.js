import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y:"0",
        opacity: 1,
        transition: {
            durtaion: 0.1,
            type: "spring",
            damping: 100, 
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const MovieDeetsModal = ({handleClose, text}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div onClick={ (e) => e.stopPropagtion() } className="modal orange-gradient" variants={dropIn} initial="hidden" exit="exit">

            </motion.div>
        </Backdrop>
    )
}

export default MovieDeetsModal;