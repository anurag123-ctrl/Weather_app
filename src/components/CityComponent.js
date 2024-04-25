import React from "react";
import styled from "styled-components";

const CityComponent = (props) => {
  const { setCity, fetchWeather, city } = props;

  return (
    <>
      <WeatherLogo src="https://tse4.mm.bing.net/th?id=OIP.0th6ckGhVxAgdzi8TzhHZQHaHa&pid=Api&P=0&h=220"></WeatherLogo>
      <SearchBox
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather(city);
        }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 30px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 12px auto;
  border: gray solid 2px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    text-align: center;
  }
  & button {
    padding: 10px;
    font-size: 18px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;


