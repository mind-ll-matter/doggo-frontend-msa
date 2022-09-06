import './CardsPage.css';
import '../Dashboard.css';
import { useState, useEffect } from "react";
import { Stack, Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Box } from "@mui/material";


export const Cards = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    
    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
        
    
    function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
    }


    return (
        <div className="d-flex p-4 flex-column align-items-center">
            <h1 className="topTitle">Card Game</h1>
            <div style={{display:"flex", alignItems:"center"}}>
                <Stack className="" direction = {windowSize.innerWidth > 720 ? "horizontal" : "vertical"} gap={3}>
                    <Box className="hands" sx={{bgcolor: "secondary.main"}}>
                        <p justify-content>Your Hand</p>
                    </Box>
                    <Box className="hands" sx={{bgcolor: "secondary.dark"}}>
                        <p justify-content>Dealer's Hand</p>
                    </Box>

                </Stack>
            </div>
            <div className = "d-flex p-2 flex-row justify-content-center">
                <div className="hitButton">
                    <Button className="button"variant="outline-danger" size="lg">Hit</Button>
                </div>
                <div className="passButton">
                    <Button className="button" variant="dark" size="lg">Pass</Button>
                </div>
            </div>
        </div>
    )

  }
  
  export default Cards;