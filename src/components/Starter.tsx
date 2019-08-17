import * as React from 'react';
import { exec } from 'child_process'
import { Button, message } from 'antd';

interface IStarterProps {

}

const Starter: React.FC<IStarterProps> = (props) => {
    const start = () => {
        exec("scrcpy -f", (err, out) => {
            if (err) {
                message.error("Oops! There was an error when starting!", 5000)
                console.error(err);
            } else {
                message.success("Sucess! Sctcpy started successfully!", 5000)
                console.debug(out)
            }
        })
    }
    return (
        <Button
            type="primary"
            color="red"
            icon="double-right"
            onClick={start}
        >
            Start It!
        </Button>
    )
};

export default Starter;
