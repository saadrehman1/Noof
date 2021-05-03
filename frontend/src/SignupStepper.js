import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Form, Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["", "", ""];
}
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      );
    case 1:
      return (
        <Form>
          <Form.Group>
            <Form.Label>Social Media Links</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Social media links"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Human</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Group>
              <Form.File label="Upload a profile picture" />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Country of residence</Form.Label>
            <Form.Control type="text" placeholder="Enter country" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dominant Hand</Form.Label>
            <Form.Control as="select">
              <option>Right</option>
              <option>Left</option>
            </Form.Control>
          </Form.Group>
        </Form>
      );
    case 2:
      return (
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Enter the skills you have</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Skills you have"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  Enter the skills you are hoping to find in collaborators
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Skills you are hoping to fnd"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /* const handleReset = () => {
    setActiveStep(0);
  }; */

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Sign Up completed successfully! &#9989;
            </Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
