import React, { FC } from "react";
import { Button } from "@mui/material";
import styles from "../../../styles/Shared.module.css";

interface ButtonProps {
	variant?: "contained" | "outlined";
	children: React.ReactNode;
	color?:
		| "inherit"
		| "primary"
		| "secondary"
		| "success"
		| "error"
		| "info"
		| "warning";
	startIcon?: React.ReactNode;
	width?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	endIcon?: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
	fromPlans?: boolean;
}

const GenericButton: FC<ButtonProps> = ({
	variant,
	children,
	color,
	startIcon,
	width,
	onClick,
	endIcon,
	style,
	className,
	fromPlans
}) => {
	return (
		<React.Fragment>
			<Button
				sx={{
					textTransform: "none",
					height: "40px",
					width: width ? width : "120px",
					backgroundColor: variant === "contained" ? fromPlans ? "#ED6AA9" : "#9B67F7" : null,
					color: "#F4F7F9",
					":hover": {
						bgcolor: variant === "contained" ? fromPlans ? "#9B67F7" : "#ED6AA9" : null,
					},
					boxShadow: "0px 7px 15px rgba(0, 0, 0, 0.07)",
					borderRadius: "100px",
					border: variant !== "contained" ? "1px solid #F4F7F9" : null,
					filter:
						variant !== "contained"
							? "drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.07))"
							: null,
					fontFamily: "Poppins, sans-seri",
					fontSize: "15px",
					fontWeight: 400,
					lineHeight: "22px",
				}}
				size="small"
				variant={variant}
				startIcon={startIcon}
				onClick={onClick}
				endIcon={endIcon}
				style={style}
				className={className}
			>
				{children}
			</Button>
		</React.Fragment>
	);
};

export const OutlinedButton: FC<ButtonProps> = ({
	variant,
	children,
	color,
	startIcon,
	width,
	onClick,
	endIcon,
	style,
	className,
}) => {
	return (
		<React.Fragment>
			<Button
				sx={{
					textTransform: "none",
					color: 'white',
					height: "40px",
					width: width ? width : "120px",
					borderRadius: "100px",
					border: "1px solid #F4F7F9",
					fontFamily: "Poppins, sans-seri",
					fontSize: "15px",
					fontWeight: 400,
					lineHeight: "22px",
				}}
				size="small"
				variant={variant}
				startIcon={startIcon}
				onClick={onClick}
				endIcon={endIcon}
				style={style}
				className={styles.button}
			>
				{children}
			</Button>
		</React.Fragment>
	);
};
export default GenericButton;
