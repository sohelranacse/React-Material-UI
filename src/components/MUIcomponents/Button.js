import { Helmet } from 'react-helmet'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import Switch from '@mui/material/Switch';



export default function ButtonComponents() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Button</title>
            </Helmet>
            

            <h2 className="mb-4">Button <a href="https://mui.com/components/buttons/" target="_blank" rel="noopener noreferrer">Link</a></h2>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <br />

            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>

            <br />
            <Stack spacing={2} direction="row">
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" href="#contained-buttons">Link</Button>
            </Stack>

            <br /> <br />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>

            <br /><br />
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
            Success
            </Button>
            <Button variant="outlined" color="error">
            Error
            </Button>

            <br /><br />
            <Button variant="outlined" size="small">
            Small
            </Button>
            <Button variant="outlined" size="medium">
            Medium
            </Button>
            <Button variant="outlined" size="large">
            Large
            </Button>
            <br /><br />


            <label htmlFor="contained-button-file">
            <input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
                Upload
            </Button>
            </label>
            <label htmlFor="icon-button-file">
            <input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
            </label>

            <br /><br />
            <LoadingButton loading variant="outlined">
            Submit
            </LoadingButton>
            <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
            Fetch data
            </LoadingButton>
            <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
            >
            Save
            </LoadingButton>

            <br /><br />

            <Switch
            name="loading"
            color="primary"
            />
        </div>
    )
}
