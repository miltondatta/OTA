import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Input, Button, InputLabel, CardHeader} from '@material-ui/core';

// Css
import '../../assets/css/contact.css';

const useStyles = makeStyles({
    card: {
        maxWidth: '40%',
        margin: '0 auto',
        background: '#0f3e68',
        opacity: 0.5
    },
    media: {
        height: 'auto',
    },
    cardHeader:{
        color: '#000',
        padding: '15px 0px',
        textAlign: 'center',
        borderBottom: '1px solid #eee'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={'contact-area'}>
            <div className={'contact-area-container'}>
                <Card className={classes.card}>
                    <CardHeader
                        title={'Contact Us'}
                        className={classes.cardHeader}>
                    </CardHeader>
                    <CardActionArea>
                        <CardContent>
                            <FormControl className={'form-control'}>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input id="name" name={'name'} type={'text'}/>
                            </FormControl>
                            <FormControl className={'form-control'}>
                                <InputLabel htmlFor="phone">Phone Number</InputLabel>
                                <Input id="phone" name={'phone'} type={'text'}/>
                            </FormControl>
                            <FormControl className={'form-control'}>
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" name={'email'} type={'email'}/>
                            </FormControl>
                            <FormControl className={'form-control'}>
                                <InputLabel htmlFor="address">Address</InputLabel>
                                <Input id="address" name={'address'} type={'text'}/>
                            </FormControl>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}