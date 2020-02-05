import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from 'antd'
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

const Toast = ({ isOpenRetry }) => {
    console.log(isOpenRetry)
    const retry = () => toast.error('Retry ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })

    if (isOpenRetry) {
        retry()
    }

    return (
        <ToastContainer
        />
    )
}
const mapStateToProps = (state) => ({
    isOpenRetry: state.notificationReducer.isOpen
})

export default connect(mapStateToProps)(Toast)
