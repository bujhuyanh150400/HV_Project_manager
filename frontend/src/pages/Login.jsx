import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment, IconButton
} from "@mui/material";
import {useState} from "react";
import Card from "~/Component/Card.jsx";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleLoginForm = (event) => {
        const {name, value} = event.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Xóa bỏ lỗi khi người dùng thay đổi giá trị
        }));
    };

    const handleValidate = () => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let formIsValid = true;
        const newErrors = {};
        if (!login.email) {
            formIsValid = false;
            newErrors.email = 'Vui lòng nhập email';
        }else if (!login.email.match(emailRegex)) {
            formIsValid = false;
            newErrors.email = 'Email sai định dạng';
        }
        if (!login.password) {
            formIsValid = false;
            newErrors.password = 'Vui lòng nhập mật khẩu';
        }
        if (!formIsValid) {
            setErrors(newErrors);
        }
        return formIsValid
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formIsValid = handleValidate();
        if (formIsValid) {
            console.log('Login:', login);
        }
    };
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.main'
            }}>
            <Card center={true}>
                <Box>
                    <Typography variant="h4" align="center" gutterBottom>
                        Đăng nhập
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            error={Boolean(errors.email)}
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={login.email}
                            onChange={handleLoginForm}
                            helperText={errors.email}
                        />
                        <FormControl  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={()=>setShowPassword((show) => !show)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <TextField
                            error={Boolean(errors.password)}
                            name="password"
                            type="password"
                            label="Mật khẩu"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={login.password}
                            onChange={handleLoginForm}
                            helperText={errors.password}
                        />
                        <Box mt={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Đăng nhập
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Card>
        </Container>
    );
}

export default Login