import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from 'antd'
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { NotiAction } from '../../actions/notification.action';
import { TIME_RETRY, MAX_RETRIES } from '../../config';

const Toast = ({ isOpenRetry, onClose, duration, msg }) => {
    let toastId = null;
    console.log(msg)
    const retry = () => toastId = toast.error(msg, {
        position: "top-right",
        autoClose: TIME_RETRY * duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => { onClose() }
    })

    if (isOpenRetry) {
        retry()
    } else {
        toast.update(toastId, { autoClose: 0 });
    }

    return (
        <ToastContainer
        />
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isOpenRetry: state.notificationReducer.isOpen,
        duration: state.notificationReducer.duration,
        msg: state.notificationReducer.message
    }
}

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(NotiAction.close())
})

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
