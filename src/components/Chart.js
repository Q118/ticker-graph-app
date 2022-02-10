import React, { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { useSelector } from 'react-redux'


function Chart() {
    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();

    const storeData = useSelector(state => state.data && state.data);


    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
            layout: {
                backgroundColor: '#253248',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            grid: {
                vertLines: {
                    color: '#334158',
                },
                horzLines: {
                    color: '#334158',
                },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            priceScale: {
                borderColor: '#485c7b',
            },
            timeScale: {
                borderColor: '#485c7b',
            },
        });

        console.log("!" + chart.current);
        console.log("Store Data: ", JSON.stringify(storeData));

        const candleSeries = chart.current.addCandlestickSeries({
            upColor: '#4bffb5',
            downColor: '#ff4976',
            borderDownColor: '#ff4976',
            borderUpColor: '#4bffb5',
            wickDownColor: '#838ca1',
            wickUpColor: '#838ca1',
        });

        //  candleSeries.setData(props.data);

        // let myData = JSON.stringify(storeData)
        // let myData = JSON.parse(myData);
        console.log(typeof storeData);

        // convert storeData into an array of objects
        // let myData = Object.values(storeData);

        let myData = Object.keys(storeData);
        console.log(typeof myData);
        if (storeData) {
            candleSeries.setData(myData);
        }

        // const areaSeries = chart.current.addAreaSeries({
        //   topColor: 'rgba(38,198,218, 0.56)',
        //   bottomColor: 'rgba(38,198,218, 0.04)',
        //   lineColor: 'rgba(38,198,218, 1)',
        //   lineWidth: 2
        // });

        // areaSeries.setData(areaData);

        // const volumeSeries = chart.current.addHistogramSeries({
        //     color: '#182233',
        //     lineWidth: 2,
        //     priceFormat: {
        //         type: 'volume',
        //     },
        //     overlay: true,
        //     scaleMargins: {
        //         top: 0.8,
        //         bottom: 0,
        //     },
        // });

        // volumeSeries.setData(props.volume);
    }, [storeData]);

    // Resize chart on container resizes.
    useEffect(() => {
        resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
            setTimeout(() => {
                chart.current.timeScale().fitContent();
            }, 0);
        });

        resizeObserver.current.observe(chartContainerRef.current);

        return () => resizeObserver.current.disconnect();
    }, []);

    // do not show the chart untill the data is ready


    return (
        <div>
            <div ref={chartContainerRef} className="chart-container" />
        </div>
    );
}

export default Chart;