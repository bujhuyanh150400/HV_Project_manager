import {Paper} from "@mui/material";
const Card = ({children,style,center})=> {
    const flexCenter = {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    }
    return (
        <Paper elevation={3}
            sx={{ padding: "0.8rem", ...(center ? flexCenter : {}), ...style }}>
            {children}
        </Paper>
    );
}

export default Card;