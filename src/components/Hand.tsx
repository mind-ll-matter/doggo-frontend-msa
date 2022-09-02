import React from 'react'
import Box from '@mui/material/Box';
//import { Image } from 'react-bootstrap'

type HandProps={
    background: string
    variant: string

}


export const Hand = (props: HandProps) => {
    return (
        <Box sx={{
            height: '200px',
            width: '200px',
            bgcolor: props.background,
        }}>
            <p>{props.variant}'s Hand</p>
        </Box>
        
    )
    }

    export default Hand;