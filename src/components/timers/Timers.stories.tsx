import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import TimeTracker, {TimerProps, TimerType, timerTypes} from "../generic/TimeTracker";


export default {
  title: "Components/TimeRunner",
  component: TimeTracker,
  tags : ['autodocs'],
  argTypes : {
    type: {
      control : {
        type: "select",
        options : [
          timerTypes.stopwatch,
          timerTypes.tabata,
          timerTypes.xy,
          timerTypes.countdown
        ] },
    }
  }
} as Meta;

const Template : StoryFn<TimerProps> = (args : TimerProps) => <TimeTracker {...args}    />;

export const StopWatch  = Template.bind({});
StopWatch.args = {
  type : timerTypes.stopwatch as TimerType
}

export const Tabata  = Template.bind({});
Tabata.args = {
  type : timerTypes.tabata as TimerType
};

export const XY  = Template.bind({});
XY.args = {
  type : timerTypes.xy as TimerType
}

export const Countdown  = Template.bind({});

Countdown.args = {
  type : timerTypes.countdown as TimerType
}


