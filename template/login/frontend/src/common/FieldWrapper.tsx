import React, { ReactNode } from "react";
import Box from '@mui/material/Box';

interface FieldWrapperProps {
    children: ReactNode
}

const FieldWrapper = (props: FieldWrapperProps) => {
    return <Box sx={{ display: "flex", width: "350px", margin: "15px 0" }} data-name="field-wrapper">
        {props.children}
    </Box>
}

export default FieldWrapper;