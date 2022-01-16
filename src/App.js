import { Root } from "./components";
import { ReactComponent as Illustration } from "./svg/illustration.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Invalid email address detected. Enter your valid email address")
		.required("Enter a valid Email address"),
	password: yup.string().min(4).max(15).required(),
	rememberMe: yup.bool(),
});

function App() {
	const {
		register,
		handleSubmit,
		// formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
		mode: "onChange",
	});

	const handleLogin = (data) => {
		// Handles form and sends all inputs to console
		console.log(data);
		reset();
	};

	return (
		<Root>
			<Root.MainPane>
				<Root.Logo>Digital</Root.Logo>
				<Root.HeroText>
					Artificial Intelligence Driving Results For The Travel
					Industry
				</Root.HeroText>
				<Root.Form onSubmit={handleSubmit(handleLogin)}>
					<Root.FormText>
						Welcome back! Please login to your account.
					</Root.FormText>
					<Root.Input
						type="email"
						name="email"
						label="Email Address"
						register={register}
					/>
					<Root.Input
						type="password"
						name="password"
						label="Password"
						register={register}
					/>
					<Root.FormBottom>
						<Root.Checkbox register={register} />
						<Root.Forget>Forgot Password?</Root.Forget>
					</Root.FormBottom>
					<Root.FormButtons>
						<Root.FormButton type="submit">Login</Root.FormButton>
						<Root.FormButton type="button">Sign Up</Root.FormButton>
					</Root.FormButtons>
				</Root.Form>
				<Root.Bottom>
					<Root.Text>Or login with</Root.Text>
					<Root.Link>Facebook</Root.Link>
					<Root.Link>LinkedIn</Root.Link>
					<Root.Link>Google</Root.Link>
				</Root.Bottom>
			</Root.MainPane>
			<Root.ImagePane>
				<Illustration />
			</Root.ImagePane>
		</Root>
	);
}

export default App;
