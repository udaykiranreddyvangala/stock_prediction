import React,{useContext} from 'react'
import Button from './Button'
import { AuthContext } from './authProvider'

const Main = () => {
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
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
                    <>
                        {isLoggedIn ? (
                            <>
                                <Button text='Explore Now' class="btn-info" url="/dashboard" />
                            </>
                        ) : (
                            <>
                                <Button text='Explore Now' class="btn-outline-info" url="/login" />
                            </>
                        )}
                    </>

                </div>
            </div>
        </>
    )
}

export default Main