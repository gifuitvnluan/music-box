import styles from "@/styles/FooterPlayer.module.scss";
import {Button, Slider, Typography} from "antd";
import {CaretRightFilled, StepBackwardFilled, StepForwardFilled} from "@ant-design/icons";
import React from "react";

export default function FooterPlayer() {
  return <div className={styles.outer}>
    <Slider
      defaultValue={30}
      className={styles.slider}
    />
    <div className={styles.playControls}>
      <Button
        size={'large'}
        shape={'circle'} type={'text'}
        icon={<StepBackwardFilled/>}
      />
      <Button
        size={'large'}
        shape={'circle'} type={'text'}
        style={{width: 60, height: 60}}
      >
        <CaretRightFilled style={{fontSize: 40}}/>
      </Button>
      <Button
        size={'large'}
        shape={'circle'} type={'text'}
        icon={<StepForwardFilled/>}
      />
      <div className={styles.timer}>
        <Typography.Text>
          12:20 / 30:01
        </Typography.Text>
      </div>
    </div>
    <div className={styles.info}>

    </div>
    <div className={styles.audioControls}>

    </div>
  </div>
}
