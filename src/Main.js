import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import jsonData from './jsondata.json';

function Main() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const chartRef = useRef();

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    filterData();
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const filterData = () => {
    if (selectedCountry) {
      setFilteredData(data.filter(item => item.country === selectedCountry));
    } else {
      setFilteredData(data);
    }
  };

  const drawBarChart = () => {
    d3.select(chartRef.current).selectAll("*").remove();
    const margin = { top: 20, right: 30, bottom: 120, left: 60 }; 
    const containerWidth = chartRef.current.offsetWidth;
    const containerHeight = chartRef.current.offsetHeight;

    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
      .attr("preserveAspectRatio", "xMinYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(filteredData.map(d => d.topic))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(filteredData, d => d.intensity)])
      .nice()
      .range([height, 0]);

    svg.append("g")
      .selectAll(".bar")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.topic))
      .attr("y", d => y(d.intensity))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.intensity))
      .attr("fill", "steelblue");

    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-30)")
      .style("text-anchor", "end");

    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

    
    svg.append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y)
        .tickSize(-width)
        .tickFormat(''))
      .selectAll(".tick line")
      .attr("stroke", "lightgrey")
      .attr("stroke-dasharray", "2,2");
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      drawBarChart();
    }
  }, [filteredData]);

  return (
    <div className="container text-gray-600 mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl text-gray-600 mb-4 sm:mb-8">Data Visualization Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="countrySelect" className=" text-gray-600 mr-2">Select Country:</label>
        <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange} className="p-2 rounded border">
          <option value=''>All Countries</option>
          {[...new Set(data.map(item => item.country))].map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div id="barChart" ref={chartRef} className="mb-8  w-full h-96 sm:h-120"></div>
    </div>
  );
}

export default Main;
