import React from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotiAction } from '../../actions/notification.action';
import { TIME_RETRY } from '../../config';
import CountDown from '../CountDown';

const Toast = ({ isOpenRetry, onClose, duration, msg }) => {
    let toastId = null;
    let message = msg || <RetryCountDown seconds={duration} />
    const retry = () => toastId = toast.error(message, {
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
        <ToastContainer />
        // <Timer seconds={10} />
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


const RetryCountDown = (props) => {
    return (
        <>
            <span>Retry after</span>
            {' '}
            <CountDown {...props} />
        </>
    )
}