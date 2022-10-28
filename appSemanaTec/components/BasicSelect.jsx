import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [tiendas, setTiendas] = React.useState('');

  const handleChange = (event) => {
    setTiendas(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tiendas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tiendas}
          label="Tiendas más cercanas"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tienda 1</MenuItem>
          <MenuItem value={20}>Tienda 2</MenuItem>
          <MenuItem value={30}>Tienda 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
