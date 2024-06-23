import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import styled from "styled-components";
import { Box, Container, Heading, Text, useToast } from "@chakra-ui/react";
import DietPlan from "./DietPlan";

const StyledCalculateButton = styled.button({
  backgroundColor: "rgb(190, 0, 253);",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  border: "2px solid #333",
  width: "100%",
});

const underWeightDiet = {
  goals: [
    "Promote healthy weight gain",
    "Increase muscle mass",
    "Improve overall health",
  ],
  keyPrinciples: [
    "Calorie surplus: Consume more calories than expended",
    "Nutrient-dense foods",
    "Frequent meals and snacks",
    "Strength training exercises",
  ],
};
const overWeightDiet = {
  goals: [
    "Promote weight loss",
    "Improve overall health",
    "Increase energy levels",
  ],
  keyPrinciples: [
    "Calorie deficit: Consume fewer calories than expended",
    "Balanced diet: Include all food groups",
    "Portion control",
    "Regular physical activity",
  ],
};
const healthyDiet = {
  goals: [
    "Maintain overall health and wellness",
    "Balance nutrients",
    "Support energy levels and physical activity",
  ],
  keyPrinciples: [
    "Balanced diet: Include a variety of foods from all food groups",
    "Moderate portions",
    "Regular physical activity",
  ],
};

function BmiCalculatorForm() {
  const [bmi, setBmi] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [diet, setDiet] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsSubmitted(true);
    const heightInMeters = values.height / 100;
    const bmiValue = (
      values.weight /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(bmiValue);

    localStorage.setItem("height", heightInMeters.toFixed(2));
    localStorage.setItem("weight", values.weight);
    localStorage.setItem("bmi", bmiValue);

    if (bmiValue >= 25) {
      console.log("Overweight ", bmiValue);
      setStatus("Overweight");
      setDiet(overWeightDiet);
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("Healthy");
      setDiet(healthyDiet);
      console.log("Healthy ", bmiValue);
    } else if (bmiValue < 18.5) {
      setStatus("Underweight");
      setDiet(underWeightDiet);
      console.log("Underweight ", bmiValue);
    }

    console.log("Your bmi is : ", bmiValue);
  };

  const toast = useToast({
    position: "top",
    duration: 1000,
    containerStyle: {
      border: "3px solid gray",
      boxShadow: "10px 10px 10px #333",
      fontSize: "25px",
    },
    render: () => (
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        textAlign="center"
        height="60px"
        color="white"
        p={3}
        bg="pink.300"
      >
        Welcome
      </Box>
    ),
  });

  useEffect(() => {
    if (isSubmitted) return;
    toast();
  }, [toast, isSubmitted]);

  return (
    <>
      <div className="formArea">
        <Form
          size="large"
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            width: 900,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="height"
            rules={[
              {
                required: true,
                message: "Please input your height!",
              },
            ]}
          >
            <Input placeholder="Enter your height (cm)" />
          </Form.Item>

          <Form.Item
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input your weight!",
              },
            ]}
          >
            <Input placeholder="Enter your weight (kg)" />
          </Form.Item>

          <Form.Item>
            <StyledCalculateButton>Calculate</StyledCalculateButton>
          </Form.Item>
        </Form>
      </div>

      {isSubmitted && (
       <>
       <Box
            justifyContent="center"
            display="flex"
            margin="auto"
            textAlign="center"
            width="74%"
            padding="5px"
            borderRadius="5px"
            color="white"
          >
            <Box
              margin="10px"
              textAlign="center"
              width="42%"
              padding="10px"
              backgroundColor={`${
                status === "Overweight"
                  ? "red"
                  : status === "Underweight"
                  ? "orange.400"
                  : "green"
              }`}
              borderRadius="5px"
              color="white"
            >
              <Text fontSize="20px">
                <b>{status}</b>
              </Text>
            </Box>

            <Box
              margin="10px"
              textAlign="center"
              width="42%"
              padding="10px"
              backgroundColor="purple"
              borderRadius="5px"
              color="white"
            >
              <Text fontSize="20px">
                Your bmi is: <b>{bmi}</b>
              </Text>
            </Box>
          </Box>
          
          <DietPlan diet={diet} />
          
          </>

         
      )}
    </>
  );
}

export default BmiCalculatorForm;
