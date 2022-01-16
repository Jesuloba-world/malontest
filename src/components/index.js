import { useState } from "react";
import {
	Container,
	ImagePane,
	MainPane,
	Logo,
	HeroText,
	Form,
	FormText,
	Input,
	InputControl,
	Label,
	Checkbox,
	Forget,
	FormBottom,
	CheckControl,
	CheckText,
	FormButtons,
	FormButton,
	Text,
	Bottom,
	Link,
} from "./style";

export const Root = ({ children }) => {
	return <Container>{children}</Container>;
};

Root.ImagePane = ({ children }) => {
	return <ImagePane>{children}</ImagePane>;
};

Root.MainPane = ({ children }) => {
	return <MainPane>{children}</MainPane>;
};

Root.Logo = ({ children }) => {
	return <Logo>{children}</Logo>;
};

Root.HeroText = ({ children }) => {
	return <HeroText>{children}</HeroText>;
};

Root.Form = ({ children, ...props }) => {
	return <Form {...props}>{children}</Form>;
};

Root.FormText = ({ children }) => {
	return <FormText>{children}</FormText>;
};

Root.Input = function Element({ label, name, register, ...props }) {
	const [focus, setFocus] = useState(false);

	return (
		<InputControl focus={focus}>
			<Label>{label}</Label>
			<Input
				{...props}
				name={name}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				{...register(name)}
			/>
		</InputControl>
	);
};

Root.FormBottom = ({ children }) => {
	return <FormBottom>{children}</FormBottom>;
};

Root.Checkbox = ({ register }) => {
	return (
		<CheckControl>
			<Checkbox
				type="checkbox"
				name="rememberMe"
				id="remember"
				{...register("rememberMe")}
			/>
			<CheckText htmlFor="remember">Remember Me</CheckText>
		</CheckControl>
	);
};

Root.Forget = ({ children }) => {
	return <Forget href="#">{children}</Forget>;
};

Root.FormButtons = ({ children }) => {
	return <FormButtons>{children}</FormButtons>;
};

Root.FormButton = ({ children, ...props }) => {
	return <FormButton {...props}>{children}</FormButton>;
};

Root.Text = ({ children }) => {
	return <Text>{children}</Text>;
};

Root.Bottom = ({ children }) => {
	return <Bottom>{children}</Bottom>;
};

Root.Link = ({ children }) => {
	return <Link href={"#"}>{children}</Link>;
};
