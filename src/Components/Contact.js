import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import * as Yup from 'yup';

import OnePage from './OnePage';

const useStyles = makeStyles(() => ({
    contentPaper: {
        margin: "0 256px",
        padding: "32px",
    },
    formRoot: {
        "& .MuiFormControl-root": {
            margin: "8px 0",
        }
    },
}));

export default function Contact() {
    const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .max(20, 'That name is a little long.')
                    .required('Required'),
                lastName: Yup.string()
                    .max(30, 'That name is a little long.')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address').required('Required'),
                phone: Yup.string()
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .required('Required'),
                subject: Yup.string()
                    .required('Required'),
                message: Yup.string()
                    .required('Required'),
              }),
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2))
            },
        });

    const classes = useStyles();

    return(
        <OnePage >
            <Paper className={classes.contentPaper}>
                <Typography variant="h3" >Drop Us a Line!</Typography>
                <form onSubmit={formik.handleSubmit} className={classes.formRoot}>
                    <Grid container spacing={1}>
                        <Grid item xs ={12}>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <TextField
                                        fullWidth
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        fullWidth
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs ={12}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs ={12}>
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs ={12}>
                            <TextField
                                fullWidth
                                id="subject"
                                name="subject"
                                label="Subject"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                helperText={formik.touched.subject && formik.errors.subject}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs ={12}>
                            <TextField
                                fullWidth
                                id="message"
                                name="message"
                                label="What can we help you with?"
                                multiline
                                rows={5}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs ={12}>
                            <Button variant="outlined" type="submit">Send Email</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper >
        </OnePage >
    )
}