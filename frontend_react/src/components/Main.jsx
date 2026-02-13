import React from 'react'
import Button from './Button'
const Main = () => {
    return (
        <>
            <div className='container rounded'>
                <div className="p-4 bg-light-dark text-center">
                    <h2 className='text-light'>Stock Prediction Portal</h2>
                    <p className='text-light lead'>This stock prediction application utilizes machine learning
                        techniques, specifically employing Keras, and LSTM
                        model, integrated within the Django framework. It
                        forecasts future stock prices by analyzing 100-day and
                        200-day moving averages, essential indicators widely
                        used by stock analysts to inform trading and investment
                        decisions.</p>
                    <Button text="Login" class="btn-info" />

                </div>
            </div>
        </>
    )
}

export default Main