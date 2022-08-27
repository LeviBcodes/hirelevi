import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import MovieDeetsDemo from "../assets/MovieDeetsDemo.mp4"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
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
            <motion.div onClick={ (e) => e.stopPropagtion() } className="modal bg-blue-400" variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <div className="">
                    <video controls className="align-middle justify-center" width="720">
                        <source src={MovieDeetsDemo} type="video/mp4" />
                        Your browser does not support this video format.
                    </video>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default MovieDeetsModal;