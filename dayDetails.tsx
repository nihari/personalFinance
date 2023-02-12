import React from 'react'
import { Typography } from '@mui/material'
import { users, PaymentDetails, User } from '../pages/utils/mockData'
import { theme } from '../pages/utils/theme';


function DayDetails() {
    const paymentReceived = () => {
        let todaysPayments: Array<PaymentDetails> = [];
        users.map(item => {
            const filteredPayments = item.paymentDetails.filter((x) => {
                if (x.date === new Date().toLocaleString().split(',')[0])
                    return x;
            });
            todaysPayments.push(...filteredPayments);
        })
        if (todaysPayments.length)
            return todaysPayments.reduce((acc, payment) => acc + payment.amount, 0)
        return 0;
    }

    const paymentsDue = () => {
        let todaysDue: Array<User> = [];
        todaysDue = users.filter(item => {
            if (item.dueDate === new Date().toLocaleString().split(',')[0]) {
                return item.dailyDue
            }
        })
        return todaysDue.reduce((acc, x: User) => {
            return acc + x.dailyDue
        }, 0)
    }


    return (
        <Typography className='flex justify-between' component="div" style={{
            display:"flex",
            margin:"12px",
            // border: "1px solid black",
            // backgroundColor: "#fff",
            // color: theme.palette.primary.main
        }}>
            <section >{`Payment recieved today: ${paymentReceived()}`}</section>
            <section >{`Payment due today: ${paymentsDue()}`}</section>
        </Typography>
    )
}

export default DayDetails