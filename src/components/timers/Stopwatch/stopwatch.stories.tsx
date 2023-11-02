import React from "react";
import { Meta } from "@storybook/react";
import TimeTracker, { TimerProps, timerTypes } from "../../generic/TimeTracker";
import TimersView from "../../../views/TimersView";

export default {
  title: "Components/Stopwatch",
  component: TimeTracker,
  tags : ['autodocs'],
  argTypes : {
    value: {
      control : { type: "select",options : [timerTypes.stopwatch, timerTypes.tabata, timerTypes.xy, timerTypes.countdown] },
    }
  }
} as Meta;

const Template = (args : TimerProps) => <TimersView    />;

export const Default = Template.bind({});