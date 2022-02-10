import React, { useState, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
// import { fetchStock } from './Search';
import moment from 'moment';

function Chart() {
    // const [loading, setLoading] = useState(true);
    //todo: use above to display spinner while data is loading

    function timeConverter(UNIX_timestamp) {
        let s = new Date(UNIX_timestamp * 1000)
        let m = moment(s).utc().format("YYYY-MM-DD");
        return m;
    }
    const [data, setData] = useState(null);
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c82m3d2ad3ia12596ssg"
    const finnhubClient = new finnhub.DefaultApi()


    let dataArray;
    const fetchStock = (userInput) => {
        dataArray = [{
            time: "",
            value: Number
        }];
        if (userInput === "" || userInput === undefined || userInput === null) {
            userInput = "ETH"
        }
        finnhubClient.stockCandles(userInput, "D", 1551650578, 1583186578,
            (error, data) => {
                if (error) {
                    console.error(error);
                } else {
                    for (let i = 0; i < data.t.length; i++) {
                        dataArray[i] = {
                            time: timeConverter(data.t[i]),
                            value: data.c[i]
                        }
                    }
                    for (let i = 0; i < dataArray.length; i++) {
                        localStorage.setItem(dataArray[i].time, dataArray[i].value);
                    }
                    return dataArray;
                }
            });
    }


    const ref = React.useRef();
    const [input, setInput] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    let ticker = document.getElementById('symbol');
    const handleSearchChange = (e) => {
        setInput(e.target.value);
    };
    const handleClick = () => {
        setSearchInput(ticker.value);
    };


    useEffect(() => {
        let dataArray = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            dataArray.push({
                time: key,
                value: value
            })
        }
        setData(dataArray);
    }, [setSearchInput]);


    const iStyle = {
        //adding padding to input-div for readability
        paddingTop: '10px',
        paddingBottom: '10px',
    };

    useEffect(() => {
        fetchStock(searchInput);
        console.log(dataArray) // debug
        const chart = createChart(ref.current, { width: 900, height: 500 });
        const aSeries = chart.addAreaSeries({
            topColor: 'rgba(33, 150, 243, 0.56)',
            bottomColor: 'rgba(33, 150, 243, 0.04)',
            lineColor: 'rgba(33, 150, 243, 1)',
            lineWidth: 2,
        });
        var darkTheme = {
            chart: {
                layout: {
                    backgroundColor: '#2B2B43',
                    lineColor: '#2B2B43',
                    textColor: '#D9D9D9',
                },
                watermark: {
                    color: 'rgba(0, 0, 0, 0)',
                },
                crosshair: {
                    color: '#758696',
                },
                grid: {
                    vertLines: {
                        color: '#2B2B43',
                    },
                    horzLines: {
                        color: '#363C4E',
                    },
                },
            },
            series: {
                topColor: 'rgba(32, 226, 47, 0.56)',
                bottomColor: 'rgba(32, 226, 47, 0.04)',
                lineColor: 'rgba(32, 226, 47, 1)',
            },
        };

        var themesData = {
            Dark: darkTheme
        };

        function syncToTheme(theme) {
            chart.applyOptions(themesData[theme].chart);
            aSeries.applyOptions(themesData[theme].series);
        }

        setTimeout(() => {  // using setTimeout to make sure the data is set before the chart is rendered
            aSeries.setData(dataArray);
        }, 1000);
        localStorage.clear();
        syncToTheme('Dark');
        return () => {
            chart.remove()
        }

    }, [searchInput, dataArray]);

    return (
        <>
            <div>
                <h3>
                    Enter the ticker symbol of the stock you want to see.
                </h3>
                <div style={iStyle}>
                    <h6>Stock Ticker</h6>
                    <input type="text" id="symbol" onChange={handleSearchChange} value={input} placeholder="ex: ETH" />
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
            <div ref={ref} />
            <div>
                <h3>Viewing Info for: {searchInput ? searchInput : "ETH"}</h3>
            </div>
        </>
    );
}

export default Chart;