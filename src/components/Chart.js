import React, { useState, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import moment from 'moment';
import Loader from './Loader';

function Chart() {
    const [loading, setLoading] = useState(false);
    //above to display spinner while data is loading
    const ref = React.useRef();
    const [input, setInput] = useState(null);
    const [searchInput, setSearchInput] = useState("ETH");
    const [startValue, setStartValue] = useState(null);
    const [startInput, setStartInput] = useState(1551650578);
    const [endValue, setEndValue] = useState(null);
    const [endInput, setEndInput] = useState(1583186578);
    let ticker = document.getElementById('symbol');
    let start = document.getElementById('start');
    let end = document.getElementById('end');

    function timeConverter(UNIX_timestamp) {
        let s = new Date(UNIX_timestamp * 1000)
        let m = moment(s).utc().format("YYYY-MM-DD");
        return m;
    }

    //function to convert readable time into UNIX timestamp
    function convertUnix(time) {
        console.log(`${time} is being passed in`); //debug
        let m = Math.floor(new Date(time) / 1000)
        return m;
    }

    const [data, setData] = useState(null);
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c82m3d2ad3ia12596ssg"
    const finnhubClient = new finnhub.DefaultApi()


    let dataArray;
    const fetchStock = (userInput, start, end) => {
        let s;
        let e;
        dataArray = [{
            time: Date,
            value: Number
        }];
        if (userInput === "" || userInput === undefined || userInput === null) {
            userInput = "ETH"
        }
        s = startValue ? convertUnix(start) : 1551650578
        e = endValue ? convertUnix(end) : 1583186578
        finnhubClient.stockCandles(userInput, "D", s, e,
            (error, data) => {
                if (error) {
                    console.error(error);
                } else {
                    for (let i = 0; i < data?.t?.length; i++) {
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

    const handleSearchChange = (e) => {
        setInput(e.target.value);
    };

    const handleStartChange = (e) => {
        setStartValue(e.target.value);
    }

    const handleEndChange = (e) => {
        setEndValue(e.target.value);
    }

    const handleClick = () => {
        setSearchInput(ticker.value);
        setStartInput(start.value);
        setEndInput(end.value);
        setLoading(true);
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
        paddingTop: '10px',
        paddingBottom: '10px',
    };

    useEffect(() => {
        fetchStock(searchInput, startInput, endInput);

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

        // JOHN! If you are reading this.. please note, I realize what I have done below is a "quick and dirty" way to accomplish waiting for the components data to mount. In production, I would NEVER do this. I would instead use a React hook to wait for the data to load or another more efficient approach. Please also note that I learn FAST and if hired, I will really dive deep into the tradeview library and become a subject matter expert on it and will then be able to implement it with custom functionality and more complex implementations. In sum, Please take a chance on me! What I lack in "professional" experience, I make up for with my passion, determination, and self-motivation! I am also quite moldable at this point (no 'set in stone' ways) which would benefit you as my boss.
        setTimeout(() => {  // using setTimeout to make sure the data is set before the chart is rendered
            setLoading(false);
            aSeries.setData(dataArray);
        }, 850);
        localStorage.clear();
        syncToTheme('Dark');
        return () => {
            chart.remove()
        }

    }, [searchInput, dataArray, startInput, endInput, loading]);

    return (
        <>
            <div>
                <h3>
                    Enter the ticker symbol of the stock you want to see.
                </h3>
                <div style={iStyle}>
                    <h6>Stock Ticker</h6>
                    <input type="text" id="symbol" onChange={handleSearchChange} value={input} placeholder="ex: ETH" />
                    {'            '}
                    <label htmlFor="start">Starting Date: </label>
                    <input type="date" id="start" htmlFor="start" value={startValue} onChange={handleStartChange} />
                    {'            '}
                    <label htmlFor="end">Ending Date: </label>
                    <input type="date" id="end" htmlFor="end" value={endValue} onChange={handleEndChange} />
                    {'            '}
                    <button className="btn-success" onClick={handleClick}>Submit</button>
                </div>
                {loading && <Loader visible />}
            </div>
            <div ref={ref} />
            <div>
                <h3>Viewing Info for: {searchInput ? searchInput : "ETH"}</h3>
            </div>
        </>
    );
}

export default Chart;