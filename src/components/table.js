import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "font-awesome/css/font-awesome.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

export default function VerticalLinearStepper({ details }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("b.tech");
  const [value1, setValue1] = React.useState("2017");
  const [value2, setValue2] = React.useState("it");

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChange1(event) {
    setValue1(event.target.value);
  }
  function handleChange2(event) {
    setValue2(event.target.value);
  }
  function getSteps() {
    return [
      "Select your graduation system",
      "Select your batch",
      "Select your stream"
    ];
  }
  var t = (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="b.tech"
          control={<Radio color="primary" />}
          label="B.tech"
          labelPlacement="end"
        />
        <FormControlLabel
          value="m.tech"
          control={<Radio color="primary" />}
          label="M.tech"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );

  var t1 = (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value1}
        onChange={handleChange1}
        row
      >
        <FormControlLabel
          value="2019"
          control={<Radio color="primary" />}
          label="2019"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2018"
          control={<Radio color="primary" />}
          label="2019"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2017"
          control={<Radio color="primary" />}
          label="2017"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2016"
          control={<Radio color="primary" />}
          label="2016"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
  var t2 = (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value2}
        onChange={handleChange2}
        row
      >
        <FormControlLabel
          value="cs"
          control={<Radio color="primary" />}
          label="CS"
          labelPlacement="end"
        />
        <FormControlLabel
          value="it"
          control={<Radio color="primary" />}
          label="IT"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
  var period1 = <b>9:00-10:30</b>;
  var period2 = <b>10:45-12:15</b>;
  var period3 = <b>2:00-3:30</b>;
  var period4 = <b>4:00-5:30</b>;
  var period5 = <b>4:30-6:00</b>;

  var res1 = (
    <div>
      <center>
        <h4>Your Schedule</h4>
      </center>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
        </div>
      </div>
    </div>
  );
  var res2 = (
    <div>
      <center>
        <h1>Your Schedule</h1>
      </center>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>{" "}
        </div>
      </div>
    </div>
  );
  var res3 = (
    <div>
      <center>
        <h1>Your Schedule</h1>
      </center>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
          
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Tuesday</h5>
          <hr/>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[12].slot2}|{" "}
            {period2} 
           </h6>
           
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Wednesday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[21].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[21].slot3}| {period3}{" "}
          </h6>
         
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Thursday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[30].slot2}|{" "}
            {period2}
          </h6>
          
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Friday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
         No theory clsses today
          </h6>
          
        </div>
      </div>
    </div>
  );
  var res4 = (
    <div>
      <center>
        <h1>Your Schedule</h1>
      </center>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>{" "}
        </div>
      </div>
    </div>
  );
  var res5 = (
    <div>
      <center>
        <h1>Your Schedule</h1>
      </center>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monday</h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-hand-point-right" /> {details[3].slot2}|{" "}
            {period2} <i className="fas fa-hand-point-right" />{" "}
            {details[3].slot3}| {period3}{" "}
          </h6>{" "}
        </div>
      </div>
    </div>
  );

  function getStepContent(step) {
    switch (step) {
      case 0:
        return t;
      case 1:
        return t1;
      case 2:
        return t2;
      default:
        return "Unknown step";
    }
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
          {value === "b.tech" && value1 === "2017" && value2 === "it"
            ? res3
            : "______"}
          {value === "b.tech" && value1 === "2017" && value2 === "cs"
            ? res5
            : "______"}
          {value === "b.tech" && value1 === "2018" && value2 === "it"
            ? res4
            : "______"}
          {value === "b.tech" && value1 === "2018" && value2 === "cs"
            ? res3
            : "______"}
          {value === "b.tech" && value1 === "2019" && value2 === "it"
            ? res2
            : "______"}
          {value === "b.tech" && value1 === "2019" && value2 === "cs"
            ? res1
            : "______"}
          {value === "b.tech" && value1 === "2016" && value2 === "it"
            ? res1
            : "______"}
          {value === "b.tech" && value1 === "2016" && value2 === "cs"
            ? res1
            : "______"}
          {value === "m.tech" && value1 === "2018" ? res1 : "______"}
          {value === "m.tech" && value1 === "2019" ? res2 : "______"}
        </Paper>
      )}
    </div>
  );
}
