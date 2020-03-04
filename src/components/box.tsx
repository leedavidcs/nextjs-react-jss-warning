import React, { FC } from "react";
import { createUseStyles } from "react-jss";

interface IProps {
	color: string;
}

const styles = {
	root: {
		height: 100,
		width: 100,
		backgroundColor: "black",
		color: ({ color }) => color
	}
};

const useStyles = createUseStyles(styles);

export const Box: FC<IProps> = ({ color }) => {
	const classes = useStyles({ color });

	return <div className={classes.root}>Hello world!</div>
};
