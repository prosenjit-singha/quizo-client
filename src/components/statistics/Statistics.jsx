import React from "react";
import { Container, Wrapper, FooterText } from "./Statistics.styles";
import { useWindowSize } from "react-use-size";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
import { useTheme } from "styled-components";

const Statistics = () => {
  const theme = useTheme();
  const data = useLoaderData();
  const { height, width } = useWindowSize();
  const aspectRatio = width / (height - 150);
  return (
    <Container>
      <Wrapper>
        <ResponsiveContainer width="100%" aspect={aspectRatio}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ stroke: theme.text.secondary, strokeWidth: 0 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" name="Total Quiz" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <FooterText>Topics Analytics</FooterText>
      </Wrapper>
    </Container>
  );
};

export default Statistics;
