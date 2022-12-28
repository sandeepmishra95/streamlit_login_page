import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

/**
 * Styled Input Variant
 */
const Input = styled(TextField)({
    '& .MuiFilledInput-root': {
        backgroundColor: 'rgb(248,251,250)',
    },
});

export default Input;